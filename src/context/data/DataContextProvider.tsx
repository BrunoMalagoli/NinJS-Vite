import { useLocation, useNavigate } from 'react-router-dom';
import { QuizCardProps } from '../../pages/dashboard/types';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import useDebounce from '../../hooks/useDebounce';
import DataContext from './DataContext';
import urlBuilder from '../../helpers/urlBuilder';
import { CompletedFilter, DifficultFilter, Filters } from '../../types';

const DataContextProvider = ({ children }: { children: ReactJSXElement }) => {
	const initialState: Filters = {
		completed: CompletedFilter.all,
		difficult: DifficultFilter.all
	};
	const navigate = useNavigate();
	const location = useLocation();
	const [page, setPage] = useState(1);
	const [maxPage, setMaxPage] = useState(1);
	const [urlSearchParams, seturlSearchParams] = useState(initialState);

	const value = useDebounce<number>(page, 400);

	let [completed, difficult] = urlBuilder(urlSearchParams);

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
			(!localStorage.getItem('token') ||
				!localStorage.getItem('token')?.length ||
				state.error &&
			location.pathname.includes('/home')
		) {
			navigate('/login', { replace: true });
			localStorage.clear();
			setPage(1);
			setMaxPage(1);
			seturlSearchParams(initialState);
		}
		if (!location.pathname.includes('/home')) {
			setPage(1);
			setMaxPage(1);
			seturlSearchParams(initialState);
		}
	}, [state.error, url, location.pathname]);

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
