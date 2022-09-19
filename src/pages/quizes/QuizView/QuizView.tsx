import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { QuizResponse } from './utils/interfaces';
import { useEffect, useState } from 'react';
import { Center, Container, Spinner } from '@chakra-ui/react';
import QuizQuestion from './components/QuizQuestion/QuizQuestion';
import useFetch from '../../../hooks/useFetch';

const QuizView = () => {
	const { category, id } = useParams();

	const questionID = category + id!;

	const token = localStorage.getItem('token');

	const [quizData, setQuizData] = useState<QuizResponse>();

	const state = useFetch<QuizResponse>(
		`${
			import.meta.env.VITE_URL_CONECT_BACKEND
		}api/quiz/find?questionID=${questionID}`,
		{
			headers: {
				'Content-Type': 'application/json',
				'x-token': token as string
			}
		}
	);

	useEffect(() => {
		if (state.data) {
			setQuizData(state.data);
		}
		const errorToast = () => {
			if (state.error?.message.includes('Found')) {
				toast.error('Ups ocurrio un error encontrando tu pregunta', {
					position: toast.POSITION.BOTTOM_CENTER
				});
				return;
			}
			toast.error(state.error?.message, {
				position: toast.POSITION.BOTTOM_CENTER
			});
		};
		errorToast();
	}, [state]);

	return (
		<div style={{ height: '100%' }}>
			{quizData ? (
				<Container height={'inherit'} paddingTop={'5%'}>
					<QuizQuestion quizData={quizData!} />
				</Container>
			) : (
				<Center>
					<Spinner
						marginTop={20}
						thickness='4px'
						speed='0.65s'
						emptyColor='yellow.200'
						color='white.500'
						size='xl'
					/>
				</Center>
			)}
		</div>
	);
};

export default QuizView;
