import { useNavigate } from 'react-router-dom';
import { QuizCardProps } from '../../pages/dashboard/types';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import useDebounce from '../../hooks/useDebounce';
import DataContext from './DataContext';

const DataContextProvider = ({ children }: { children: ReactJSXElement }) => {
	const initialState = {
		completed: 'Todas',
		difficult: 'Todas'
	};
	const navigate = useNavigate();
	const [page, setPage] = useState(1);
	const [maxPage, setMaxPage] = useState(1);
	const [urlSearchParams, seturlSearchParams] = useState(initialState);

	const value = useDebounce<number>(page, 400);

	let completed;
	let difficult;

	if (urlSearchParams.completed === 'Todas') {
		completed = '';
	} else if (urlSearchParams.completed === 'Aprobadas') {
		completed = '&completed=true&all=true';
	} else {
		completed = '&completed=false&all=true';
	}

	if (urlSearchParams.difficult === 'Todas') {
		difficult = '';
	} else if (urlSearchParams.difficult === 'Jonin') {
		difficult = '&difficult=Jonin';
	} else if (urlSearchParams.difficult === 'Genin') {
		difficult = '&difficult=Genin';
	} else {
		difficult = '&difficult=Chunin';
	}

	let url =
		localStorage.getItem('token') && localStorage.getItem('token')?.length
			? `${
					import.meta.env.VITE_URL_CONECT_BACKEND
			  }api/quiz/list?page=${value}${difficult}${completed}`
			: undefined;

	const state = useFetch<QuizCardProps[]>(url, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'x-token': localStorage.getItem('token') || ''
		}
	});

	useEffect(() => {
		if (
			(state.error?.message.includes('Unauthorized') ||
				!localStorage.getItem('token') ||
				!localStorage.getItem('token')?.length) &&
			location.pathname.includes('/home')
		) {
			localStorage.clear();
			navigate('/login', { replace: true });
			setPage(1);
			setMaxPage(1);
			seturlSearchParams(initialState);
		}
	}, [state, url]);

	return (
		<DataContext.Provider
			value={{
				state,
				page,
				setPage,
				maxPage,
				setMaxPage,
				seturlSearchParams,
				urlSearchParams
			}}
		>
			{children}
		</DataContext.Provider>
	);
};

export default DataContextProvider;
