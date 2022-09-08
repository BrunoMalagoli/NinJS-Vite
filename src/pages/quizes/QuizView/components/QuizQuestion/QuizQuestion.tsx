import { Box } from '@chakra-ui/react';
import NextQuizButton from '../../../../../components/NextQuizButton';
import { qData } from '../../utils/interfaces';
import Answers from './components/Answers';
import QuizCode from './components/QuizCode';
const QuizQuestion = ({ quizData }: qData) => {
	console.log({ quizData });
	return (
		<Box>
			<QuizCode code={quizData.code} />
			<Answers quizData={quizData} />
			<NextQuizButton />
		</Box>
	);
};

export default QuizQuestion;
