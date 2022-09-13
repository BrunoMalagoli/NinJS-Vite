import { FC, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DataContextProvider from '../../context/data/DataContextProvider';
import ProfileContextProvider from '../../context/profile/ProfileContextProvider';
import { PropsMiddlewaresAutentication } from '../types';

const RequireAuth: FC<PropsMiddlewaresAutentication> = ({ children }) => {
	return (
		<DataContextProvider>
			<ProfileContextProvider>
				<div style={{ backgroundColor: '#16191C', height: 'inherit' }}>
					{children}
				</div>
			</ProfileContextProvider>
		</DataContextProvider>
	);
};

export default RequireAuth;
