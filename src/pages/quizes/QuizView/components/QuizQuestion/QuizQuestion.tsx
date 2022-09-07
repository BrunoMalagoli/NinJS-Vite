import { Box } from '@chakra-ui/react';
import { qData } from '../../utils/interfaces';
import Answers from './components/Answers';
const QuizQuestion = ({ quizData }: qData) => {
	console.log({ quizData });
	return (
		<Box>
			<Answers quizData={quizData} />
		</Box>
	);
};

export default QuizQuestion;
