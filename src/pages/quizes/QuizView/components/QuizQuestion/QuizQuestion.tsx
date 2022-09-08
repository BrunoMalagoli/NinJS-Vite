import { Box } from '@chakra-ui/react';
import NextQuizButton from '../../../../../components/NextQuizButton';
import { qData } from '../../utils/interfaces';
import Answers from './components/Answers';
import QuizCode from './components/QuizCode';
const QuizQuestion = ({ quizData }: qData) => {
	console.log({ quizData });
	quizData.code = `const func = (firstParam, secondParam = 4){
		return firstParam + secondParam 
	  }
	  console.log(func(2,null))`;
	return (
		<Box>
			<QuizCode code={quizData.code} />
			<Answers quizData={quizData} />
			<NextQuizButton />
		</Box>
	);
};

export default QuizQuestion;
