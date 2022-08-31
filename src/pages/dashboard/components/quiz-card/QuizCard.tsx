import React, { FC } from 'react';
import { Badge, Box, Flex, Text } from '@chakra-ui/react';

import { BackgroundSwitch, QuizCardProps } from '../../types';
import { useNavigate } from 'react-router-dom';
import styles from './QuizCard.module.css';

const QuizCard: FC<QuizCardProps> = ({
	difficult,
	quizID,
	number,
	completed
}) => {
	const Background = BackgroundSwitch[difficult];
	const navigate = useNavigate()
	const handleClick =()=>{
		let category = quizID.slice(0,1)
		let id = quizID.slice(1,2)
		console.log(`Categoria: ${category}, Id: ${id}`)
		navigate(`/quiz/${category}/${id}`)
	}
	return (
		<Box onClick={handleClick} className={`${styles['glass-card-' + difficult]} ${styles.card}`}>
			<Background />
			<Box>
				<Text>{number}</Text>
			</Box>
			<Flex
				justifyContent={'center'}
				flexGrow={1}
				alignItems='center'
				direction={'column'}
			>
				<Text>{difficult}</Text>
			</Flex>
			<Flex justifyContent={'end'}>
				{typeof completed == 'undefined' ? (
					<Box height={'18px'}>{/*kind of hacky but it does the trick*/}</Box>
				) : (
					<Badge
						colorScheme={completed ? 'green' : 'red'}
						variant={'subtle'}
						borderRadius={'10px'}
					>
						{completed ? 'Passed' : 'Failed'}
					</Badge>
				)}
			</Flex>
		</Box>
	);
};

export default QuizCard;
