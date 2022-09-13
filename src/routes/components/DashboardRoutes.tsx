import { Route, Routes } from 'react-router-dom';
import Dashboard from '../../pages/dashboard/DashboardPage';
import LeaderboardPage from '../../pages/leaderboard/LeaderboardPage';
import ProfilePage from '../../pages/profile/ProfilePage';

const DashboardRoutes = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Dashboard />} />
				<Route path='/profile' element={<ProfilePage />} />
				<Route path='/leaderboard' element={<LeaderboardPage />} />
			</Routes>
		</>
	);
};

export default DashboardRoutes;
