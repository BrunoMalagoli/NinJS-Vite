import { Box, Button, Flex } from '@chakra-ui/react';
const NextQuizButton = () => {
	return (
		<Box width={'100%'} height={'200px'}>
			<Flex height={'100%'} justifyContent={'flex-end'} alignItems={'center'}>
				<Button bgColor={'primaryYellow'}>Siguiente pregunta</Button>
			</Flex>
		</Box>
	);
};

export default NextQuizButton;
