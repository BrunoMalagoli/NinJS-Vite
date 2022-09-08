import { Box } from '@chakra-ui/react';
import NextQuizButton from '../../../../../components/NextQuizButton';
import { qData } from '../../utils/interfaces';
import Answers from './components/Answers';
import QuizImage from './components/QuizImage';
const QuizQuestion = ({ quizData }: qData) => {
	console.log({ quizData });
	return (
		<Box>
			<QuizImage />
			<Answers quizData={quizData} />
			<NextQuizButton />
		</Box>
	);
};

export default QuizQuestion;
