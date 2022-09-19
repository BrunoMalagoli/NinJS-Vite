import { Flex, Heading } from '@chakra-ui/react';
import theme from '../../../styles/theme';

const NotFoundDashboard = () => {
	return (
		<Flex
			h='100%'
			justifyContent={'center'}
			alignItems='center'
			flexDir={'column'}
		>
			<Heading style={{ color: theme.colors.primaryYellow }}>Oh No!</Heading>
			<Heading style={{ color: 'white', textAlign: 'center' }}>
				Parece que aun no tienes progreso.
			</Heading>
		</Flex>
	);
};

export default NotFoundDashboard;
