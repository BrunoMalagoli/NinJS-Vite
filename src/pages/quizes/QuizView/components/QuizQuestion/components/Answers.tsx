import {
	Box,
	Center,
	Checkbox,
	CheckboxGroup,
	Container,
	Stack
} from '@chakra-ui/react';
import { qData } from '../../../utils/interfaces/index';

const Answers = ({ quizData }: qData) => {
	return (
		<Container>
			<Center>
				<CheckboxGroup>
					<Stack spacing={2} direction={'column'}>
						<Checkbox spacing={'1rem'} color={'white'}>
							{quizData.answers['A']}
						</Checkbox>
						<Checkbox spacing={'1rem'} color={'white'}>
							{quizData.answers['B']}
						</Checkbox>
						<Checkbox spacing={'1rem'} color={'white'}>
							{quizData.answers['C']}
						</Checkbox>
						<Checkbox spacing={'1rem'} color={'white'}>
							{quizData.answers['D']}
						</Checkbox>
					</Stack>
				</CheckboxGroup>
			</Center>
		</Container>
	);
};

export default Answers;
