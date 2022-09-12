import { Box, Flex } from '@chakra-ui/react';
import { MdHome, MdLeaderboard, MdLogout, MdPerson } from 'react-icons/md';
import { useLocation, useNavigate } from 'react-router-dom';
import handleLogout from '../../helpers/handleLogout';

import theme from '../../styles/theme';
const MobileNavBar = () => {
	const location = useLocation();

	const navigate = useNavigate();

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
			<Box
				onClick={() => {
					handleLogout();
					navigate('/');
				}}
			>
				<MdLogout size={'30px'} color={theme.colors.error} />
			</Box>
		</Flex>
	);
};

export default MobileNavBar;
