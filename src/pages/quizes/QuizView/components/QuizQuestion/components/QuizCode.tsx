import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
const QuizCode = ({ code }: { code: string }) => {
	return (
		<SyntaxHighlighter language='javascript' style={a11yDark}>
			{code}
		</SyntaxHighlighter>
	);
};
export default QuizCode;
