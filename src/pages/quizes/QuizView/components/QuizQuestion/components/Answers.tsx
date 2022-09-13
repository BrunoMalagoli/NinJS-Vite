import { useState } from 'react';
import {
	Center,
	Text,
	Container,
	Radio,
	RadioGroup,
	Stack
} from '@chakra-ui/react';

import { qData } from '../../../utils/interfaces/index';
const Answers = ({ quizData }: qData) => {
	const [checkedValue, setCheckedValue] = useState('A');

	return (
		<Container paddingTop={'15%'}>
			<Center>
				<RadioGroup onChange={setCheckedValue} value={checkedValue}>
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
