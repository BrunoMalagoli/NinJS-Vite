import { Badge, Box, Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';

import { useNavigate } from 'react-router-dom';
import theme from '../../../../styles/theme';
import { BackgroundSwitch, QuizCardProps } from '../../types';
import styles from './QuizCard.module.css';

const QuizCard: FC<QuizCardProps> = ({
	difficult,
	questionID,
	number,
	completed
}) => {
	const Background = BackgroundSwitch[difficult];
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
				background: [theme.colors.primaryBGLightHover],
				transform: 'scale(1.03)'
			}}
			w={{
				base: '130px',
				sm: '150px',
				xl: '170px'
			}}
			h={{
				base: '130px',
				sm: '150px',
				xl: '170px'
			}}
		>
			<Background />
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
				) : (
					<Badge
						fontSize={{ base: '10px', sm: '12px' }}
						colorScheme={completed ? 'green' : 'red'}
						variant={'subtle'}
						borderRadius={'10px'}
					>
						{completed ? 'Aprobada' : 'fallada'}
					</Badge>
				)}
			</Flex>
		</Box>
	);
};

export default QuizCard;
