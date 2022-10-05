import { FC } from 'react';
import { QuizButtonProps } from './types';
import { Box, Button, Flex } from '@chakra-ui/react';

const NextQuizButton: FC<QuizButtonProps> = ({ isLoading }) => {
	return (
		<Box width={'100%'} height={'100%'} paddingBottom={'20px'}>
			<Flex
				w={'100%'}
				height={'100%'}
				alignItems={'center'}
				justifyContent={'center'}
			>
				<Button
					isLoading={isLoading}
					_hover={{ bgColor: '#dbc146', color: 'black' }}
					variant={'outline'}
					color={'#F8D859'}
					padding={'1rem  1.5rem'}
					type='submit'
				>
					Enviar
				</Button>
			</Flex>
		</Box>
	);
};

export default NextQuizButton;
