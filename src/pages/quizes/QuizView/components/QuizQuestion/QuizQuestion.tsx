import { useState, useContext } from 'react';
import {
	Flex,
	FormControl,
	Modal,
	ModalOverlay,
	ScaleFade,
	SlideFade,
	useDisclosure
} from '@chakra-ui/react';
import NextQuizButton from '../../../../../components/NextQuizButton';
import { qData } from '../../utils/interfaces';
import Answers from './components/Answers';
import Questions from './components/Questions';
import QuizCode from './components/QuizCode';
import AnswersContext from '../../../../../context/answers/AnswersContext';
import { useParams } from 'react-router-dom';
import { Form, Formik } from 'formik';
import { toast } from 'react-toastify';
import { CustomModalContent } from './components/CustomModalContent';
import { Result } from './components/types/index';
const QuizQuestion = ({ quizData }: qData) => {
	const [checkedAnswer, setCheckedAnswer] = useContext(AnswersContext);
	const [reviewResponse, setReviewResponse] = useState<Result>();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { category, id } = useParams();
	let questionID = category + id!;
	const reviewBody = {
		questionID,
		answer: checkedAnswer
	};
	let token = localStorage.getItem('token');
	function handleSubmit() {
		fetch(`${import.meta.env.VITE_URL_CONECT_BACKEND}api/quiz/review`, {
			headers: {
				'Content-type': 'application/json',
				'x-token': token as string
			},
			method: 'PUT',
			body: JSON.stringify(reviewBody)
		})
			.then(data => data.json())
			.then(response => {
				setReviewResponse(response.result);
				console.log(response);
				onOpen();
			})
			.catch(err => {
				if (err.message?.includes('Internal')) {
					toast.error('Ups algo sucedió mal! (Internal server error)');
				}
				toast.error('Error inesperado');
			});
		setCheckedAnswer('A');
	}

	return (
		<>
			<Formik initialValues={checkedAnswer} onSubmit={handleSubmit}>
				<Form>
					<FormControl height={'100%'}>
						<Flex height={'100%'} flexDirection={'column'}>
							<Questions questions={quizData.question} />
							<QuizCode code={quizData.code} />
							<Answers quizData={quizData} />
							<NextQuizButton />
						</Flex>
					</FormControl>
				</Form>
			</Formik>
			<Modal
				colorScheme={'yellow'}
				isOpen={isOpen}
				onClose={onClose}
				motionPreset={'slideInRight'}
				closeOnOverlayClick={false}
				useInert
				isCentered
			>
				<ModalOverlay />
				<CustomModalContent {...reviewResponse!} />
			</Modal>
		</>
	);
};

export default QuizQuestion;
