import Form from './components/FormLogin';
import { useNavigate } from 'react-router-dom';
import { Flex, Link, Stack, Text } from '@chakra-ui/react';

//components
const LoginPage = () => {
	const navigate = useNavigate();
	function handleClickRegister() {
		navigate('/register', { replace: true });
	}
	return (
		<Flex bg='primaryBG' h='100vh' justify='center' align='center' w='100%'>
			<Stack width='100%' p={8} maxWidth={'md'}>
				<Text fontSize='2xl' fontWeight={700} mb='6' color='white'>
					Login
				</Text>
				<Form />
				<Text color='white' fontSize='14' textAlign={'center'}>
					Don{`'`}t have a account yet? {/* do not delete the empty space*/}
					<Link
						as={'button'}
						onClick={handleClickRegister}
						fontWeight={700}
						color='primaryYellow'
					>
						Sign Up
					</Link>
				</Text>
			</Stack>
		</Flex>
	);
};

export default LoginPage;
