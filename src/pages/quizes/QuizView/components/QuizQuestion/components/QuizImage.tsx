import { Box, Center, Flex, Image } from '@chakra-ui/react';
import styles from '../components/styles/QuizImage.module.css';
const QuizImage = () => {
	return (
		<Center>
			<Box height={'40vh'}>
				<Flex
					flexDirection={'column'}
					justifyContent={'center'}
					alignItems={'center'}
					height={'100%'}
				>
					<Image
						alt='Imagen de pregunta de codigo'
						src='/Genin/code.png'
						className={styles.quizImage}
					/>
				</Flex>
			</Box>
		</Center>
	);
};

export default QuizImage;
