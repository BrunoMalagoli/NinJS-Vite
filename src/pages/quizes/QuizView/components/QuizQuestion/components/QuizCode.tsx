import { Box } from '@chakra-ui/react';
// import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import SyntaxHighlighter from 'react-syntax-highlighter';
import tomorrowNight from 'react-syntax-highlighter/dist/cjs/styles/hljs/tomorrow-night';

import styles from '../components/styles/QuizCode.module.css';

const QuizCode = ({ code }: { code: string }) => {
	return (
		<Box height={'100%'} className={styles.codeContainer}>
			<SyntaxHighlighter
				customStyle={{ padding: '20px' }}
				language='javascript'
				style={tomorrowNight}
			>
				{code}
			</SyntaxHighlighter>
		</Box>
	);
};
export default QuizCode;
