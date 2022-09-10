import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { useState } from 'react';
import ProfileContext from './ProfileContext';

const ProfileContextProvider = ({
	children
}: {
	children: ReactJSXElement;
}) => {
	const [variant, setVariant] = useState('marble');
	const [username, setUsername] = useState(
		localStorage.getItem('username')! || ''
	);
	return (
		<ProfileContext.Provider
			value={{ variant, setVariant, username, setUsername }}
		>
			{children}
		</ProfileContext.Provider>
	);
};

export default ProfileContextProvider;
