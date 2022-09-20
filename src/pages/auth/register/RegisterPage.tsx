import Form from './components/FormRegister';
import { useNavigate } from 'react-router-dom';
import { Flex, Link, Stack, Text } from '@chakra-ui/react';

const RegisterPage = () => {
	const navigate = useNavigate();

	function handleClickLogIn() {
		navigate('/login', { replace: true });
	}

	return (
		<Flex
			justify='center'
			align='center'
			h='100vh'
			w='100%'
			bg='primaryBG'
			color='white'
		>
			<Stack width='100%' p={8} maxWidth={'md'}>
				<Text fontSize='2xl' fontWeight={700} mb='6' color='white'>
					Register
				</Text>

				<Form />
				<Text color='white' fontSize='14' textAlign={'center'}>
					Ya eres usuario? {/** no borrar el espacio anterior*/}
					<Link
						as={'button'}
						onClick={handleClickLogIn}
						fontWeight={700}
						color='primaryYellow'
					>
						Inicia Sesión
					</Link>
				</Text>
			</Stack>
		</Flex>
	);
};

export default RegisterPage;
