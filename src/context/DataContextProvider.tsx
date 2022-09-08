import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import React, { FC, useState } from 'react';
import useFetch from '../hooks/useFetch';
import { QuizCardProps } from '../pages/dashboard/types';
import DataContext from './DataContext';

const DataContextProvider = ({ children }: { children: ReactJSXElement }) => {
	const [page, setPage] = useState(1);
	const [maxPage, setMaxPage] = useState(10000);
	const [checkedAnswers, setCheckedAnswers] = useState(0);
	const state = useFetch<QuizCardProps[]>(
		`${import.meta.env.VITE_URL_CONECT_BACKEND}api/quiz/list?page=${page}`,
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'x-token': localStorage.getItem('token') || '2'
			}
		}
	);

	return (
		<DataContext.Provider value={[state, page, setPage, maxPage, setMaxPage]}>
			{children}
		</DataContext.Provider>
	);
};

export default DataContextProvider;
