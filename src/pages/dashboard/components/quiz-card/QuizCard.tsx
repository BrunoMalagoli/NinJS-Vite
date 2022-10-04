import { Box, Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { HiCheck, HiX } from 'react-icons/hi';

import { useNavigate } from 'react-router-dom';
import theme from '../../../../styles/theme';
import { cardSize, QuizCardProps } from '../../types';
import styles from './QuizCard.module.css';

const QuizCard: FC<QuizCardProps> = ({
	difficult,
	questionID,
	number,
	completed
}) => {
	const navigate = useNavigate();
	const handleClick = () => {
		let category = questionID.match(/[A-Z]/g)![0];
		navigate(`/quiz/${category}/${number}`);
	};
	return (
		<Box
			onClick={handleClick}
			className={`${styles['glass-card-' + difficult]} ${styles.card}`}
			_hover={{
				background: [theme.colors.primaryBGShade],
				transform: 'scale(1.03)'
			}}
			w={cardSize}
			h={cardSize}
		>
			<Box>
				<Text fontSize={{ base: '14px', sm: '16px' }}>{number}</Text>
			</Box>
			<Flex
				justifyContent={'center'}
				flexGrow={1}
				alignItems='center'
				direction={'column'}
			>
				<Text fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}>{difficult}</Text>
			</Flex>
			<Flex justifyContent={'end'}>
				{typeof completed == 'undefined' ? (
					<Box height={'18px'}>{/*kind of hacky but it does the trick*/}</Box>
				) : completed ? (
					<HiCheck color='#25292d' size={'20px'} />
				) : (
					<HiX color='#25292d' size={'20px'} />
				)}
			</Flex>
		</Box>
	);
};

export default QuizCard;
