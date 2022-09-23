import { Box, Flex, Text } from '@chakra-ui/react';
import Shuriken from '../../components/shuriken/Shuriken';
import theme from '../../styles/theme';

const NotFound = () => {
	return (
		<Flex
			h='100%'
			w='100%'
			flexDirection={'column'}
			justifyContent={'center'}
			alignItems='center'
		>
			<Text style={{ color: theme.colors.primaryYellow }} fontSize='6xl'>
				Oh no!
			</Text>
			<Text style={{ color: 'white' }} fontSize='2xl' textAlign={'center'}>
				Parece que nuestro equipo esta trabajando en esto.
			</Text>
			<Box marginTop={'20px'}>
				<Shuriken rotate={'rotate'} size={100} />
			</Box>
		</Flex>
	);
};

export default NotFound;
