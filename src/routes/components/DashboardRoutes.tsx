import { Box, Flex } from '@chakra-ui/react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import DesktopNavBar from '../../components/DesktopNavBar/DesktopNavBar';
import handleLogout from '../../helpers/handleLogout';
import Dashboard from '../../pages/dashboard/DashboardPage';
import LeaderboardPage from '../../pages/leaderboard/LeaderboardPage';
import ProfilePage from '../../pages/profile/ProfilePage';
import theme from '../../styles/theme';


const DashboardRoutes = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<DesktopNavBar />}>
					<Route path='/' element={<Dashboard />} />
					<Route path='/profile' element={<ProfilePage />} />
					<Route path='/leaderboard' element={<LeaderboardPage />} />
				</Route>
			</Routes>
		</>
	);
};

export default DashboardRoutes;
