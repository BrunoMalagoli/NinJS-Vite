import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { PropsMiddlewaresAutentication } from '../types';

const RequireAuth: FC<PropsMiddlewaresAutentication> = ({ children }) => {
	if (!localStorage.getItem('token'))
		return <Navigate to='/login' replace={true} />;
	return <div style={{ backgroundColor: '#16191C' }}>{children}</div>;
};

export default RequireAuth;
