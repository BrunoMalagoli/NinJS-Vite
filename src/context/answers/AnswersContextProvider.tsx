import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import AnswersContext from './AnswersContext';
import { useState } from 'react';
const AnswersContextProvider = ({
	children
}: {
	children: ReactJSXElement;
}) => {
	const [checkedAnswer, setCheckedAnswer] = useState('');
	return (
		<AnswersContext.Provider value={[checkedAnswer, setCheckedAnswer]}>
			{children}
		</AnswersContext.Provider>
	);
};

export default AnswersContextProvider;
