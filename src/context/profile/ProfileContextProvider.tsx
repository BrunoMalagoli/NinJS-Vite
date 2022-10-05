import { toast } from 'react-toastify';
import { QuizCardProps } from '../../pages/dashboard/types';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMemo, useState, useCallback, useEffect, useContext } from 'react';
import useFetch from '../../hooks/useFetch';
import toastStyles from '../../styles/toast';
import ProfileContext from './ProfileContext';
import DataContext from '../data/DataContext';

const ProfileContextProvider = ({
	children
}: {
	children: ReactJSXElement;
}) => {
	const navigate = useNavigate();
	const location = useLocation();
	const [variant, setVariant] = useState(
		localStorage.getItem('variant') || 'marble'
	);
	const [username, setUsername] = useState(
		localStorage.getItem('username') || ''
	);
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

	const { totalQuestions } = useContext(DataContext);

	const jonin = useMemo(() => {
		if (state.data && totalQuestions.totalJonin) {
			return {
				passed:
					(state.data?.filter(
						x => x.difficult == 'Jonin' && x.completed == true
					).length *
						100) /
					totalQuestions.totalJonin,
				failed:
					(state.data?.filter(
						x => x.difficult == 'Jonin' && x.completed == false
					).length *
						100) /
					totalQuestions.totalJonin
			};
		}
		return { passed: 0, failed: 0 };
	}, [state.data, totalQuestions.totalJonin]);

	const genin = useMemo(() => {
		if (state.data && totalQuestions.totalGenin) {
			return {
				passed:
					(state.data?.filter(
						x => x.difficult == 'Genin' && x.completed == true
					).length *
						100) /
					totalQuestions.totalGenin,
				failed:
					(state.data?.filter(
						x => x.difficult == 'Genin' && x.completed == false
					).length *
						100) /
					totalQuestions.totalGenin
			};
		}
		return { passed: 0, failed: 0 };
	}, [state.data, totalQuestions.totalGenin]);

	const chunin = useMemo(() => {
		if (state.data && totalQuestions.totalChunin) {
			return {
				passed:
					(state.data?.filter(
						x => x.difficult == 'Chunin' && x.completed == true
					).length *
						100) /
					totalQuestions.totalChunin,
				failed:
					(state.data?.filter(
						x => x.difficult == 'Chunin' && x.completed == false
					).length *
						100) /
					totalQuestions.totalChunin
			};
		}
		return { passed: 0, failed: 0 };
	}, [state.data, totalQuestions.totalChunin]);

	const completed = useMemo(() => {
		if (state.data) {
			return state.data.filter(x => x.completed == true).length;
		}
		return 0;
	}, [state.data]);

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
		[variant, username]
	);
	useEffect(() => {
		if (
			(!localStorage.getItem('token') ||
				!localStorage.getItem('token')?.length ||
				state.error?.message.includes('Unauthorized')) &&
			location.pathname.includes('/home')
		) {
			navigate('/login', { replace: true });
			localStorage.clear();
			setUsername('');
			setVariant('');
		}
		if (!location.pathname.includes('/home')) {
			setUsername('');
			setVariant('');
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
