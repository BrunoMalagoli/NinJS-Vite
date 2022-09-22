import { Box } from '@chakra-ui/react';
import { Hero } from './components/Hero';
import IntroSection from './components/IntroSection';
import MainSection from './components/MainSection';

export const LandingPage = () => {
	return (
		<Box minWidth={'100%'} height={'100%'}>
			<Hero />
			<IntroSection />
			<MainSection />
		</Box>
	);
};
