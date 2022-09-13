import { Box, Button, Flex } from '@chakra-ui/react';
const NextQuizButton = () => {
	return (
		<Box width={'100%'} height={'100%'}>
			<Flex
				w={'100%'}
				height={'100%'}
				alignItems={'center'}
				justifyContent={'center'}
			>
				<Button
					_hover={{ bgColor: '#dbc146', color: 'black' }}
					variant={'outline'}
					color={'#F8D859'}
					padding={'1rem  1.5rem'}
				>
					Siguiente pregunta
				</Button>
			</Flex>
		</Box>
	);
};

export default NextQuizButton;
