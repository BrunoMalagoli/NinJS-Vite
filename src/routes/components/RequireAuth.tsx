import { FC, useEffect } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { PropsMiddlewaresAutentication } from '../types';

const RequireAuth: FC<PropsMiddlewaresAutentication> = ({ children }) => {
	const navigate = useNavigate();
	const location = useLocation();
	useEffect(() => {
		if (!localStorage.getItem('token')) return navigate('/login');

		if (localStorage.getItem('token')) {
			fetch(`${import.meta.env.VITE_URL_CONECT_BACKEND}api/user/validate`, {
				method: 'GET',
				headers: {
					'x-token': localStorage.getItem('token') || ''
				}
			})
				.then(res => res.json())
				.then(data => {
					if (data.status == 'Error') {
						localStorage.clear();
						return navigate('/login');
					}
				});
		}
	}, [location.pathname]);
	return (
		<div style={{ backgroundColor: '#16191C', height: 'inherit' }}>
			{children}
		</div>
	);
};

export default RequireAuth;
