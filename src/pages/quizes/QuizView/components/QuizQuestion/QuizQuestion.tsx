import { Box } from '@chakra-ui/react';
import { qData } from '../../utils/interfaces';
const QuizQuestion = ({quizData}: qData) => {
	return <Box>{quizData}</Box>;
};

export default QuizQuestion;
