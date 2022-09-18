import { Box, Text } from '@chakra-ui/react';
import styles from '../components/styles/Questions.module.css';
const Questions = ({ questions }: { questions: string }) => {
	return (
		<Box className={styles['question-container']}>
			<Text className={styles['question-box']}>{questions}</Text>
		</Box>
	);
};

export default Questions;
