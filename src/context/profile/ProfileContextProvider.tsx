import { toast } from 'react-toastify';
import { QuizCardProps } from '../../pages/dashboard/types';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMemo, useState, useCallback, useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import toastStyles from '../../styles/toast';
import ProfileContext from './ProfileContext';

const ProfileContextProvider = ({
	children
}: {
	children: ReactJSXElement;
}) => {
	const navigate = useNavigate();
	const location = useLocation();
	const url =
		localStorage.getItem('token') &&
		localStorage.getItem('token')?.length &&
		!location.pathname.includes('/quiz')
			? `${import.meta.env.VITE_URL_CONECT_BACKEND}api/user/progress`
			: undefined;

	const state = useFetch<QuizCardProps[]>(url, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'x-token': localStorage.getItem('token') || ''
		}
	});

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
		return 0;
	}, [state.data]);

	const [variant, setVariant] = useState(localStorage.getItem('variant') || '');
	const [username, setUsername] = useState(
		localStorage.getItem('username') || ''
	);

	const updateProfile = useCallback(
		(username: string) => {
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
							toast.success('Guardado satisfactoriamente', {
								style: toastStyles
							});
						});
					} else {
						response
							.json()
							.then(a => {
								toast.error(a.ErrorMessage, { style: toastStyles });
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
		},
		[variant]
	);
	useEffect(() => {
		if (
			(!localStorage.getItem('token') ||
				!localStorage.getItem('token')?.length ||
				state.error?.message.includes('Unauthorized')) &&
			location.pathname.includes('/home')
		) {
			localStorage.clear();
			navigate('/login', { replace: true });
		}
	}, [state, location.pathname]);

	return (
		<ProfileContext.Provider
			value={{
				variant,
				setVariant,
				username,
				setUsername,
				jonin,
				genin,
				chunin,
				completed,
				updateProfile
			}}
		>
			{children}
		</ProfileContext.Provider>
	);
};

export default ProfileContextProvider;
