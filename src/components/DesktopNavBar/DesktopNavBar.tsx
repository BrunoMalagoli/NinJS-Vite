import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { MdHome, MdLeaderboard, MdLogout, MdPerson } from 'react-icons/md';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import handleLogout from '../../helpers/handleLogout';
import theme from '../../styles/theme';

function DesktopNavBar() {
	const location = useLocation();

	return (
		<Flex>
			<Flex
				w={'30%'}
				h='100vh'
				color='#fff'
				display={{ base: 'none', md: 'flex' }}
				background={theme.colors.primaryBGShade}
				flexDirection='column'
				className='containerDesktopNavBar'
			>
				<Heading
					color={theme.colors.primaryYellow}
					display='flex'
					justifyContent='center'
					alignItems='center'
					mt='3'
					mb='3'
				>
					<Text color={'white'}>Nin</Text>JS
				</Heading>
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
