import { Box, Flex } from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MdHome, MdLeaderboard, MdLogout, MdPerson } from 'react-icons/md';
import toastLogout from '../../pages/dashboard/utils/toastLogout';

import theme from '../../styles/theme';
const MobileNavBar = () => {
	const location = useLocation();
	const navigate = useNavigate();
	function handleLogout() {
		toastLogout();
		localStorage.removeItem('token');
		localStorage.removeItem('username');
		navigate('/');
	}
	return (
		<Flex
			h='56px'
			backgroundColor={theme.colors.primaryBGShade}
			borderTopRadius={'20px'}
			justifyContent={'space-evenly'}
			alignItems={'center'}
		>
			<Box onClick={() => navigate('/home/leaderboard')}>
				<MdLeaderboard
					size={'30px'}
					color={
						location.pathname == '/home/leaderboard'
							? theme.colors.primaryYellow
							: theme.colors.primaryBGLight
					}
				/>
			</Box>
			<Box onClick={() => navigate('/home')}>
				<MdHome
					size={'30px'}
					color={
						location.pathname == '/home' || location.pathname == '/home/'
							? theme.colors.primaryYellow
							: theme.colors.primaryBGLight
					}
				/>
			</Box>
			<Box onClick={() => navigate('/home/profile')}>
				<MdPerson
					size={'30px'}
					color={
						location.pathname == '/home/profile'
							? theme.colors.primaryYellow
							: theme.colors.primaryBGLight
					}
				/>
			</Box>
			<Box onClick={handleLogout}>
				<MdLogout size={'30px'} color={theme.colors.error} />
			</Box>
		</Flex>
	);
};

export default MobileNavBar;
