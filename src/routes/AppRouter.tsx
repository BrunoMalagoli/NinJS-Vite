import { Route, Routes } from 'react-router-dom';
import DashboardRoutes from './components/DashboardRoutes';
import { MainRoutes } from './components/MainRoutes';
import QuizRoutes from './components/QuizRoutes';
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
			<Route path='/quiz/*' element={
				<RequireAuth>
					<QuizRoutes/>
				</RequireAuth>
			}/>
		</Routes>
	);
};
