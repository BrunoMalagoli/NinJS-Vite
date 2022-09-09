import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { QuizCardProps } from '../../pages/dashboard/types';
import DataContext from './DataContext';

const DataContextProvider = ({ children }: { children: ReactJSXElement }) => {
	const [page, setPage] = useState(1);
	const [maxPage, setMaxPage] = useState(1);
	const [urlSearchParams, seturlSearchParams] = useState({
		completed: 'all',
		difficult: 'all'
	});

	let completed;
	let difficult;

	if (urlSearchParams.completed === 'all') {
		completed = '';
	} else if (urlSearchParams.completed === 'aprobadas') {
		completed = '&completed=true&all=true';
	} else {
		completed = '&completed=false&all=true';
	}

	if (urlSearchParams.difficult === 'all') {
		difficult = '';
	} else if (urlSearchParams.difficult === 'jonin') {
		difficult = '&difficult=Jonin';
	} else if (urlSearchParams.difficult === 'genin') {
		difficult = '&difficult=Genin';
	} else {
		difficult = '&difficult=Chunin';
	}

	let url = `${
		import.meta.env.VITE_URL_CONECT_BACKEND
	}api/quiz/list?page=${page}${difficult}${completed}`;

	const state = useFetch<QuizCardProps[]>(url, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'x-token': localStorage.getItem('token') || '2'
		}
	});

	return (
		<DataContext.Provider
			value={[state, page, setPage, maxPage, setMaxPage, seturlSearchParams]}
		>
			{children}
		</DataContext.Provider>
	);
};

export default DataContextProvider;