import { Box } from '@chakra-ui/react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import styles from '../components/styles/QuizCode.modules.css';
const QuizCode = ({ code }: { code: string }) => {
	return (
		<Box height={'25vh'}>
			<SyntaxHighlighter
				customStyle={{ padding: '20px' }}
				language='javascript'
				style={a11yDark}
			>
				{code}
			</SyntaxHighlighter>
		</Box>
	);
};
export default QuizCode;
