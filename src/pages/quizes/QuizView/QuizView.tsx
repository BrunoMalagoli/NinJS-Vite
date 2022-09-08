import { Center, Container, Spinner } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import QuizQuestion from './components/QuizQuestion/QuizQuestion';
import { qData, quizResponse } from './utils/interfaces';
import useFetch from '../../../hooks/useFetch';
import { ToastContainer, toast } from 'react-toastify';
const QuizView = () => {
	const { category, id } = useParams();
	const questionID = category + id!;
	const token = localStorage.getItem('token');
	const [quizData, setQuizData] = useState<quizResponse>();
	const state = useFetch<quizResponse>(
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
	console.log(state);
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
	console.log(quizData);
	return (
		<div style={{ height: '100vh' }}>
			{quizData ? (
				<Container>
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
