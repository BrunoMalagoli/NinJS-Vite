import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { useEffect, useMemo, useState } from 'react';
import Swal from 'sweetalert2';
import useFetch from '../../hooks/useFetch';
import handleErrorSweetAlert from '../../pages/auth/login/utils/handleErrorSweetAlert';
import { QuizCardProps } from '../../pages/dashboard/types';
import ProfileContext from './ProfileContext';

const ProfileContextProvider = ({
	children
}: {
	children: ReactJSXElement;
}) => {
	const state = useFetch<QuizCardProps[]>(
		`${import.meta.env.VITE_URL_CONECT_BACKEND}api/user/progress`,
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'x-token': localStorage.getItem('token') || '2'
			}
		}
	);

	const jonin = useMemo(() => {
		if (state.data) {
			return {
				passed:
					(state.data?.filter(
						x => x.difficult == 'Jonin' && x.completed == true
					).length *
						100) /
					16,
				failed:
					(state.data?.filter(
						x => x.difficult == 'Jonin' && x.completed == false
					).length *
						100) /
					16
			};
		}
		return { passed: 0, failed: 0 };
	}, [state.data]);
	const genin = useMemo(() => {
		if (state.data) {
			return {
				passed:
					(state.data?.filter(
						x => x.difficult == 'Genin' && x.completed == true
					).length *
						100) /
					16,
				failed:
					(state.data?.filter(
						x => x.difficult == 'Genin' && x.completed == false
					).length *
						100) /
					16
			};
		}
		return { passed: 0, failed: 0 };
	}, [state.data]);
	const chunin = useMemo(() => {
		if (state.data) {
			return {
				passed:
					(state.data?.filter(
						x => x.difficult == 'Chunin' && x.completed == true
					).length *
						100) /
					16,
				failed:
					(state.data?.filter(
						x => x.difficult == 'Chunin' && x.completed == false
					).length ?? 0 * 100) / 16
			};
		}
		return { passed: 0, failed: 0 };
	}, [state.data]);

	const completed = useMemo(() => {
		if (state.data) {
			return state.data.filter(x => x.completed == true).length;
		}
	}, [state.data]);

	const [variant, setVariant] = useState(
		localStorage.getItem('variant')! || ''
	);
	const [username, setUsername] = useState(
		localStorage.getItem('username')! || ''
	);

	const updateProfile = (username: string) => {
		fetch(`${import.meta.env.VITE_URL_CONECT_BACKEND}api/user/profile`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				'x-token': localStorage.getItem('token') || ''
			},
			body: JSON.stringify({
				username,
				variant
			})
		})
			.then(response => {
				if (response.ok) {
					response.json().then(data => {
						localStorage.setItem('username', data?.result.username);
						localStorage.setItem('variant', data?.result.variant);
						Swal.fire({
							icon: 'success',
							title: 'OK',
							text: 'Guardado satisfactoriamente',
							background: '#3b3b3b',
							color: '#fff'
						});
					});
				} else {
					response
						.json()
						.then(a => {
							handleErrorSweetAlert(a.ErrorMessage);
							throw new Error(a.ErrorMessage);
						})
						.catch(err => {
							console.error(err);
						});
				}
			})
			.catch(err => {
				console.error(err);
			});
	};
	return (
		<ProfileContext.Provider
			value={{
				variant,
				setVariant,
				username,
				setUsername,
				updateProfile,
				genin,
				jonin,
				chunin,
				completed
			}}
		>
			{children}
		</ProfileContext.Provider>
	);
};

export default ProfileContextProvider;
