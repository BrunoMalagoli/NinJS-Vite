import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import NotFound from '../../pages/404/NotFound';
import LoginPage from '../../pages/auth/login/LoginPage';
import RegisterPage from '../../pages/auth/register/RegisterPage';
import { LandingPage } from '../../pages/home/index';

export const MainRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<LandingPage />} />
			<Route path='/login' element={<LoginPage />} />
			<Route path='/register' element={<RegisterPage />} />
			<Route path='/*' element={<NotFound />} />
		</Routes>
	);
};
