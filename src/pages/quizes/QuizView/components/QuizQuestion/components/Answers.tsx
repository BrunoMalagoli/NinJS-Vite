import { useContext } from 'react';
import {
	Center,
	Text,
	Container,
	Radio,
	RadioGroup,
	Stack
} from '@chakra-ui/react';
import AnswersContext from '../../../../../../context/answers/AnswersContext';
import { qData } from '../../../utils/interfaces/index';
import styles from './styles/Answers.module.css';
const Answers = ({ quizData }: qData) => {
	const [checkedAnswer, setCheckedAnswer] = useContext(AnswersContext);
	console.log({ checkedAnswer });
	return (
		<Container className={styles.answersContainer}>
			<Center>
				<RadioGroup onChange={setCheckedAnswer} value={checkedAnswer}>
					<Stack spacing={2} direction={'column'}>
						<Radio value='A' spacing={'1rem'} colorScheme={'yellow'}>
							<Text color={'primaryYellow'}>{quizData.answers['A']}</Text>
						</Radio>
						<Radio value='B' spacing={'1rem'} colorScheme={'yellow'}>
							<Text color={'primaryYellow'}>{quizData.answers['B']}</Text>
						</Radio>
						<Radio value='C' spacing={'1rem'} colorScheme={'yellow'}>
							<Text color={'primaryYellow'}>{quizData.answers['C']}</Text>
						</Radio>
						<Radio value='D' spacing={'1rem'} colorScheme={'yellow'}>
							<Text color={'primaryYellow'}>{quizData.answers['D']}</Text>
						</Radio>
					</Stack>
				</RadioGroup>
			</Center>
		</Container>
	);
};

export default Answers;
