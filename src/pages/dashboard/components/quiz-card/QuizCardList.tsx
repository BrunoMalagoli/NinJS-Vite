import { Box, Flex } from '@chakra-ui/react';
import { FC } from 'react';

import { QuizCardListProps } from '../../types';
import QuizCard from './QuizCard';

const QuizCardList: FC<QuizCardListProps> = ({
	QuizCards
}: QuizCardListProps) => {
	return (
		<Box overflowY={'auto'} h='100%' w={{ base: '100%', lg: '50%' }}>
			<Flex
				justifyContent={'center'}
				alignContent={'center'}
				flexWrap={'wrap'}
				p={'0.5em'}
				gap={4}
			>
				{QuizCards.map(card => (
					<QuizCard
						key={card.questionID}
						{...card}
						number={Number(card.questionID.match(/\d*/g)![1])}
					/>
				))}
			</Flex>
		</Box>
	);
};

export default QuizCardList;
