import { Route, Routes } from 'react-router-dom';
import Dashboard from '../../pages/dashboard/DashboardPage';
import LeaderboardPage from '../../pages/leaderboard/LeaderboardPage';
import SettingsPage from '../../pages/settings/SettingsPage';

const DashboardRoutes = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Dashboard />} />
				<Route path='/settings' element={<SettingsPage />} />
				<Route path='/leaderboard' element={<LeaderboardPage />} />
			</Routes>
		</>
	);
};

export default DashboardRoutes;
