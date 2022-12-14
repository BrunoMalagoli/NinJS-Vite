import { toast } from 'react-toastify';
import { QuizData } from '../../utils/interfaces';
import { ModalContentProps } from './components/types/index';
import { useNavigate, useParams } from 'react-router-dom';
import { CustomModalContent } from './components/CustomModalContent';
import { Form, Formik } from 'formik';
import { useState, useContext } from 'react';
import {
	Flex,
	FormControl,
	Modal,
	ModalOverlay,
	useDisclosure
} from '@chakra-ui/react';
import Answers from './components/Answers';
import Questions from './components/Questions';
import QuizCode from './components/QuizCode';
import AnswersContext from '../../../../../context/answers/AnswersContext';
import NextQuizButton from '../../../../../components/NextQuizButton';
import toastStyles from '../../../../../styles/toast';

const QuizQuestion = ({ quizData }: QuizData) => {
	const [checkedAnswer, setCheckedAnswer] = useContext(AnswersContext);

	const [reviewResponse, setReviewResponse] = useState<ModalContentProps>();

	const [loading, setLoading] = useState<boolean>(false);

	const { isOpen, onOpen, onClose } = useDisclosure();

	const { category, id } = useParams();

	const navigate = useNavigate();

	let questionID = category + id!;

	const reviewBody = {
		questionID,
		answer: checkedAnswer
	};

	let token = localStorage.getItem('token');

	function handleSubmit() {
		if (!reviewBody.answer.length) {
			toast.error('Selecciona una opción.', { style: toastStyles });
		} else {
			setLoading(true);
			fetch(`${import.meta.env.VITE_URL_CONECT_BACKEND}api/quiz/review`, {
				headers: {
					'Content-type': 'application/json',
					'x-token': token as string
				},
				method: 'PUT',
				body: JSON.stringify(reviewBody)
			})
				.then(response => {
					if (response.ok) {
						response.json().then(data => {
							setReviewResponse(data.result);
							onOpen();
						});
					} else {
						if (response.status == 401) {
							localStorage.clear();
							navigate('/login', { replace: true });
							window.location.reload();
						}
					}
				})
				.catch(err => {
					if (err.message?.includes('500')) {
						toast.error('Ups algo sucedió mal! (Internal server error)', {
							style: toastStyles
						});
					}
					toast.error('Error inesperado', { style: toastStyles });
				})
				.finally(() => setLoading(false));
			setCheckedAnswer('');
		}
	}

	return (
		<Flex height={'100%'} flexDirection='column' paddingBottom={'10px'}>
			<Formik initialValues={checkedAnswer} onSubmit={handleSubmit}>
				<Form>
					<FormControl height={'100%'}>
						<Flex height={'100%'} flexDirection={'column'}>
							<Questions questions={quizData.question} />
							<QuizCode code={quizData.code} />
							<Answers quizData={quizData} />
							<NextQuizButton isLoading={loading} />
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
				<CustomModalContent {...reviewResponse!} onClose={onClose} />
			</Modal>
		</Flex>
	);
};

export default QuizQuestion;
