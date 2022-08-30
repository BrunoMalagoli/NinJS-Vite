import React, { FC } from 'react';
import { Box, Flex } from '@chakra-ui/react';

import { QuizCardListProps } from '../../types';
import QuizCard from './QuizCard';

const QuizCardList: FC<QuizCardListProps> = ({
	QuizCards
}: QuizCardListProps) => {
	return (
		<Box overflowY={'scroll'}>
			<Flex
				justifyContent={'center'}
				alignContent={'center'}
				flexWrap={'wrap'}
				p={'0.5em'}
				gap={4}
			>
				{QuizCards.map(card => (
					<QuizCard key={card.quizID} {...card} />
				))}
			</Flex>
		</Box>
	);
};

export default QuizCardList;
