import {
	Button,
	Container,
	Flex,
	ModalBody,
	ModalContent,
	ModalHeader,
	Text
} from '@chakra-ui/react';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Result } from './types/index';
export const CustomModalContent: FC<Result> = ({ correct, explanation }) => {
	const navigate = useNavigate();
	function handleClick() {
		navigate('/home');
	}
	function nextQuizClick() {
		correct ? navigate('') : navigate('');
	}
	return (
		<ModalContent style={{ backgroundColor: '#16191C', padding: '2%' }}>
			<ModalHeader color={'primaryYellow'} fontSize={'xl'}>
				{correct ? 'Excelente!' : 'Vuelve a intentarlo!'}
				<Text fontSize={'md'}>
					{correct
						? 'Continua con tu camino del ninja'
						: 'El camino del ninja no termina aqui...'}
				</Text>
			</ModalHeader>
			<ModalBody>
				<Text
					style={{ paddingBottom: '5%', color: correct ? 'lightgreen' : 'red' }}
					fontSize={'md'}
				>
					{explanation}
				</Text>
				<Flex justifyContent={'center'} flexWrap={'wrap'} gap={4}>
					<Button
						_hover={{ bgColor: '#dbc146', color: 'black' }}
						variant={'outline'}
						color={'#F8D859'}
						padding={'1rem  1.5rem'}
						width={'80%'}
						onClick={() => {}}
					>
						{correct ? 'Siguiente desafio' : 'Volver a intentarlo'}
					</Button>
					<Button
						_hover={{ bgColor: 'error', color: 'black' }}
						variant={'outline'}
						color={'error'}
						width={'80%'}
						padding={'1rem  1.5rem'}
						onClick={() => {}}
					>
						Volver al Menú principal
					</Button>
				</Flex>
			</ModalBody>
		</ModalContent>
	);
};
