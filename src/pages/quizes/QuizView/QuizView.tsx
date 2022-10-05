import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import { QuizResponse } from './utils/interfaces';
import { useEffect, useState } from 'react';
import { Box, Center, Container, Spinner } from '@chakra-ui/react';
import useFetch from '../../../hooks/useFetch';
import toastStyles from '../../../styles/toast';
import QuizQuestion from './components/QuizQuestion/QuizQuestion';

const QuizView = () => {
	const { category, id } = useParams();

	const navigate = useNavigate();

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
		if (
			(!localStorage.getItem('token') ||
				!localStorage.getItem('token')?.length ||
				state.error?.message.includes('401')) &&
			location.pathname.includes('/quiz')
		) {
			localStorage.clear();
			navigate('/login');
		}
		const errorToast = () => {
			if (state.error?.message.includes('404')) {
				toast.error('Parece que trataste de ir a tierras desconocidas...', {
					position: toast.POSITION.BOTTOM_CENTER,
					style: toastStyles
				});
				navigate('/home');
			} else if (state.error) {
				toast.error('Parece que algo salio mal :c', {
					position: toast.POSITION.BOTTOM_CENTER,
					style: toastStyles
				});
				navigate('/home');
			}
		};
		errorToast();
	}, [state]);

	return (
		<Box style={{ height: '100%', overflowY: 'auto' }}>
			{quizData ? (
				<Container height={'inherit'} paddingTop={'5%'}>
					<QuizQuestion quizData={quizData!} />
				</Container>
			) : (
				<Center height={'100%'}>
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
		</Box>
	);
};

export default QuizView;
