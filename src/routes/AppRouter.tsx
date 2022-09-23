import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { MainRoutes } from './components/MainRoutes';
import { pageTransition } from './utils/transitions';
import { Route, Routes, useLocation } from 'react-router-dom';
import theme from '../styles/theme';
import Shuriken from '../components/shuriken/Shuriken';
import QuizRoutes from './components/QuizRoutes';
import UserLogged from './components/UserLogged';
import MobileNavBar from '../components/MobileNavBar';
import DashboardRoutes from './components/DashboardRoutes';

export const AppRoutes = () => {
	const location = useLocation();
	return (
		<Routes location={location} key={location.pathname}>
			<Route
				path='/*'
				element={
					<UserLogged>
						<motion.div
							initial='out'
							animate='in'
							exit='out'
							transition={{ delay: 0.1, type: 'keyframes' }}
							variants={pageTransition}
							style={{ height: 'inherit' }}
						>
							<Shuriken rotate={'transition'} size={100} />
							<MainRoutes />
						</motion.div>
					</UserLogged>
				}
			/>
			<Route
				path='/home/*'
				element={
					<Box
						style={{
							backgroundColor: theme.colors.primaryBG,
							height: 'inherit'
						}}
					>
						<motion.div
							initial='out'
							animate='in'
							exit='out'
							transition={{ delay: 0.1, type: 'keyframes' }}
							variants={pageTransition}
							style={{ height: 'inherit' }}
						>
							<Shuriken rotate={'transition'} size={100} />
							<DashboardRoutes />
						</motion.div>
						<Box
							display={{ md: 'none' }}
							position='fixed'
							bottom={'-1px'}
							width='100%'
						>
							<MobileNavBar />
						</Box>
					</Box>
				}
			/>
			<Route
				path='/quiz/*'
				element={
					<Box
						style={{
							backgroundColor: theme.colors.primaryBG,
							height: 'inherit'
						}}
					>
						<motion.div
							initial='out'
							animate='in'
							exit='out'
							transition={{ delay: 0.1, type: 'keyframes' }}
							variants={pageTransition}
							style={{ height: 'inherit' }}
						>
							<Shuriken rotate={'transition'} size={100} />
							<QuizRoutes />
						</motion.div>
					</Box>
				}
			/>
		</Routes>
	);
};
