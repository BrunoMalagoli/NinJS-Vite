import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { MdHome, MdLeaderboard, MdLogout, MdPerson } from 'react-icons/md';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import isNavBarOpenOrNot from '../../context/navBar/NavBarContext';
import handleLogout from '../../helpers/handleLogout';
import theme from '../../styles/theme';

function DesktopNavBar() {
	const location = useLocation();
	const { isOpenNavBar, setIsOpenNavBar } = useContext(isNavBarOpenOrNot);

	return (
		<Flex>
			<Flex flexGrow={1}>
				<Flex
					w={isOpenNavBar ? '300px' : '48px'}
					h='100vh'
					color='#fff'
					display={{ base: 'none', md: 'flex' }}
					background={theme.colors.primaryBGShade}
					flexDirection='column'
					transitionDuration='.3s'
					className='containerDesktopNavBar'
					overflow={'hidden'}
					position={'relative'}
				>
					<Box w={isOpenNavBar ? '100%' : '212px'}>
						<Box
							transitionDuration='.3s'
							transitionDelay={'.3s'}
							height={isOpenNavBar ? '60px' : '0px'}
							overflow={'hidden'}
						>
							<Heading
								color={theme.colors.primaryYellow}
								display='flex'
								justifyContent='center'
								alignItems='center'
								lineHeight={'4rem'}
							>
								<Text color={'white'} overflow='hidden'>
									Nin
								</Text>
								JS
							</Heading>
						</Box>
					</Box>
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
							<Flex m={'.5rem '} gap='1rem' alignItems={'center'} w={'300px'}>
								<MdHome
									size={'30px'}
									color={
										location.pathname == '/home' ||
										location.pathname == '/home/'
											? theme.colors.primaryYellow
											: theme.colors.primaryBGLight
									}
								/>
								<Text>Inicio</Text>
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
							<Flex m={'.5rem '} gap='1rem' alignItems={'center'} w={'300px'}>
								<MdPerson
									size={'30px'}
									color={
										location.pathname == '/home/profile'
											? theme.colors.primaryYellow
											: theme.colors.primaryBGLight
									}
								/>
								<Text>Perfil</Text>
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
							<Flex m={'.5rem '} gap='1rem' alignItems={'center'} w={'300px'}>
								<MdLeaderboard
									size={'30px'}
									color={
										location.pathname == '/home/leaderboard'
											? theme.colors.primaryYellow
											: theme.colors.primaryBGLight
									}
								/>
								<Text>Ranking</Text>
							</Flex>
						</NavLink>
					</Box>
					<Box flexGrow={1}></Box>
					<Box
						_hover={{
							background: '#37393a'
						}}
					>
						<NavLink to='/' replace={true} onClick={handleLogout}>
							<Flex m={'.5rem '} gap='1rem' alignItems={'center'} w={'300px'}>
								<MdLogout size={'30px'} color={theme.colors.error} />
								<Text>Salir</Text>
							</Flex>
						</NavLink>
					</Box>
				</Flex>
				<Button
					display={{ base: 'none', md: 'flex' }}
					p={'0'}
					border={'none'}
					_hover={{ background: '' }}
					_active={{ background: '' }}
					borderRadius={'0 15px 15px 0'}
					background={theme.colors.primaryBGShade}
					onClick={() => {
						setIsOpenNavBar(!isOpenNavBar);
					}}
					h={'3.2rem'}
					style={{
						top: '50%',
						transform: 'translateY(-50%)'
					}}
				>
					{isOpenNavBar ? (
						<HiChevronLeft
							style={{
								height: '2rem',
								width: '2rem',
								color: theme.colors.primaryYellow
							}}
						/>
					) : (
						<HiChevronRight
							style={{
								height: '2rem',
								width: '2rem',
								color: theme.colors.primaryYellow
							}}
						/>
					)}
				</Button>
				<Outlet />
			</Flex>
		</Flex>
	);
}
export default DesktopNavBar;
