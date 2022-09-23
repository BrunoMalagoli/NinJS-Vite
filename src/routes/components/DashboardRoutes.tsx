import { Route, Routes } from 'react-router-dom';
import NotFound from '../../pages/404/NotFound';
import DesktopNavBar from '../../components/DesktopNavBar/DesktopNavBar';

import Dashboard from '../../pages/dashboard/DashboardPage';
import ProfilePage from '../../pages/profile/ProfilePage';
import LeaderboardPage from '../../pages/leaderboard/LeaderboardPage';

const DashboardRoutes = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<DesktopNavBar />}>
					<Route path='/' element={<Dashboard />} />
					<Route path='/profile' element={<ProfilePage />} />
					<Route path='/leaderboard' element={<LeaderboardPage />} />
					<Route path='/*' element={<NotFound />} />
				</Route>
			</Routes>
		</>
	);
};

export default DashboardRoutes;
