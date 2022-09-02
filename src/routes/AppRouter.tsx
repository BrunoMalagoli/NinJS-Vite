import { Route, Routes } from 'react-router-dom';
import DashboardRoutes from './components/DashboardRoutes';
import { MainRoutes } from './components/MainRoutes';
import RequireAuth from './components/RequireAuth';
import UserLogged from './components/UserLogged';

export const AppRoutes = () => {
	return (
		<Routes>
			<Route
				path='/*'
				element={
					<UserLogged>
						<MainRoutes />
					</UserLogged>
				}
			/>
			<Route
				path='/home/*'
				element={
					<RequireAuth>
						<DashboardRoutes />
					</RequireAuth>
				}
			/>
		</Routes>
	);
};
