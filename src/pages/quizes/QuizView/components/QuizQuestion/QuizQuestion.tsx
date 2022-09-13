import { useState, useEffect } from 'react';
import { Box, Container, Flex, Grid, GridItem } from '@chakra-ui/react';
import NextQuizButton from '../../../../../components/NextQuizButton';
import { qData } from '../../utils/interfaces';
import Answers from './components/Answers';
import Questions from './components/Questions';
import QuizCode from './components/QuizCode';
const QuizQuestion = ({ quizData }: qData) => {
	return (
		<Flex height={'100%'} flexDirection={'column'}>
			<Questions questions={quizData.question} />
			<QuizCode code={quizData.code} />
			<Answers quizData={quizData} />
			<NextQuizButton />
		</Flex>
	);
};

export default QuizQuestion;
