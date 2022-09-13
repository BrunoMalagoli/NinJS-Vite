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
				w={'30%'}
				color='#fff'
				background={theme.colors.primaryBGShade}
				flexDirection='column'
				display={{ sm: 'none', md: 'flex' }}
				className='containerDesktopNavBar'
			>
				<Box
					style={{
						background:
							location.pathname == '/home' || location.pathname == '/home/'
								? '#1f2122'
								: ''
					}}
					_hover={{
						background: '#37393a'
					}}
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
				</Box>
				<Box
					style={{
						background: location.pathname == '/home/profile' ? '#1f2122' : ''
					}}
					_hover={{
						background: '#37393a'
					}}
				>
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
				</Box>
				<Box
					style={{
						background:
							location.pathname == '/home/leaderboard' ? '#1f2122' : ''
					}}
					_hover={{
						background: '#37393a'
					}}
				>
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
				</Box>
				<Box flexGrow={1}></Box>
				<Box
					_hover={{
						background: '#37393a'
					}}
				>
					<NavLink to='/' onClick={handleLogout}>
						<Flex m={'.5rem '} gap='1rem' alignItems={'center'}>
							<MdLogout size={'30px'} color={theme.colors.error} />
							Logout
						</Flex>
					</NavLink>
				</Box>
			</Flex>
			<Outlet />
		</Flex>
	);
}
export default DesktopNavBar;
