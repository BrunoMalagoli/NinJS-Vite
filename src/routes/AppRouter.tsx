import { Box, position } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import MobileNavBar from '../components/MobileNavBar';
import Shuriken from '../components/shuriken/Shuriken';
import DashboardRoutes from './components/DashboardRoutes';
import { MainRoutes } from './components/MainRoutes';
import QuizRoutes from './components/QuizRoutes';
import RequireAuth from './components/RequireAuth';
import UserLogged from './components/UserLogged';
import { pageTransition } from './utils/transitions';

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
							style={{ height: '100%' }}
						>
							<Shuriken rotate={true} size={100} />
							<MainRoutes />
						</motion.div>
					</UserLogged>
				}
			/>
			<Route
				path='/home/*'
				element={
					<RequireAuth>
						<>
							<motion.div
								initial='out'
								animate='in'
								exit='out'
								transition={{ delay: 0.1, type: 'keyframes' }}
								variants={pageTransition}
								style={{ height: '100%' }}
							>
								<Shuriken rotate={true} size={100} /> <DashboardRoutes />
							</motion.div>
							<Box
								display={{ md: 'none' }}
								position='fixed'
								bottom={'-1px'}
								width='100%'
							>
								<MobileNavBar />
							</Box>
						</>
					</RequireAuth>
				}
			/>
			<Route
				path='/quiz/*'
				element={
					<RequireAuth>
						<QuizRoutes />
					</RequireAuth>
				}
			/>
		</Routes>
	);
};
