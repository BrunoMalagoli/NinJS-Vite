import { Container, Spinner } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import QuizQuestion from './components/QuizQuestion/QuizQuestion';
import { qData } from './utils/interfaces';

const QuizView = () => {
	const { category, id } = useParams();
	const questionID = category + id!;
	const token = localStorage.getItem('token');
	const [quizData, setQuizData] = useState<qData>();
	useEffect(() => {
		fetch(
			`${
				import.meta.env.VITE_URL_CONECT_BACKEND
			}api/quiz/find?questionID=${questionID}`,
			{
				headers: {
					'Content-Type': 'application/json',
					'x-token': token as string
				}
			}
		)
			.then(response => response.json())
			.then(data => {
				setQuizData(data.result);
				console.log(quizData);
			})
			.catch(error => {
				console.log(error.message);
			});
	}, []);
	return (
		<div style={{ height: '100vh' }}>
			{quizData ? (
				<Container>
					<QuizQuestion quizData={quizData} />
				</Container>
			) : (
				<Spinner size={'xl'} />
			)}
		</div>
	);
};

export default QuizView;
