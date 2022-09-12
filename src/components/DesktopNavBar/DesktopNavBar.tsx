import { Box, Flex } from '@chakra-ui/react';
import { MdHome, MdLeaderboard, MdLogout, MdPerson } from 'react-icons/md';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import handleLogout from '../../helpers/handleLogout';
import theme from '../../styles/theme';

function DesktopNavBar() {
	const location = useLocation();
	return (
		<Flex h='100vh'>
			<Flex
				w={'12rem'}
				color='#fff'
				background={theme.colors.primaryBGLight}
				flexDirection='column'
				display={{ sm: 'none', md: 'flex' }}
				className='containerDesktopNavBar'
			>
				<NavLink to='/home'>
					<Flex m={'.5rem '} gap='1rem' alignItems={'center'}>
						<MdHome
							size={'30px'}
							color={
								location.pathname == '/home' || location.pathname == '/home/'
									? theme.colors.primaryYellow
									: theme.colors.primaryBGLight
							}
						/>
						Home
					</Flex>
				</NavLink>
				<NavLink to='profile'>
					<Flex m={'.5rem '} gap='1rem' alignItems={'center'}>
						<MdPerson
							size={'30px'}
							color={
								location.pathname == '/home/profile'
									? theme.colors.primaryYellow
									: theme.colors.primaryBGLight
							}
						/>
						Profile
					</Flex>
				</NavLink>
				<NavLink to='leaderboard'>
					<Flex m={'.5rem '} gap='1rem' alignItems={'center'}>
						<MdLeaderboard
							size={'30px'}
							color={
								location.pathname == '/home/leaderboard'
									? theme.colors.primaryYellow
									: theme.colors.primaryBGLight
							}
						/>
						Leaderboard
					</Flex>
				</NavLink>
				<Box flexGrow={1}></Box>
				<NavLink to='/' onClick={handleLogout}>
					<Flex m={'.5rem '} gap='1rem' alignItems={'center'}>
						<MdLogout size={'30px'} color={theme.colors.error} />
						Logout
					</Flex>
				</NavLink>
			</Flex>
			<Outlet />
		</Flex>
	);
}
export default DesktopNavBar;
