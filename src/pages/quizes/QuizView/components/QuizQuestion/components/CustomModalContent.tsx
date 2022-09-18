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
import { useNavigate, useLocation } from 'react-router-dom';
import { Result } from './types/index';
import { useState } from 'react';
export const CustomModalContent: FC<Result> = ({ correct, explanation }) => {
	const [nextQuizUrl, setNextQuizUrl] = useState('');
	const navigate = useNavigate();
	const location = useLocation();
	console.log(location.pathname);
	function createNextQuizUrl() {
		let currentUrl = location.pathname;
		let id = parseInt(currentUrl.slice(8, 10));
		let category = currentUrl.slice(6, 7).trim();
		if (id === 16) {
			switch (category) {
				case 'G':
					category = 'C';
					id = 1;
					break;
				case 'C':
					category = 'J';
					id = 1;
					break;
				case 'J':
					break;
				default:
					throw new Error();
			}
		} else {
			id++;
		}
		let newUrl = `/quiz/${category}/${id}`;
		console.log(newUrl);
		return newUrl;
	}
	function handleClick() {
		navigate('/home');
	}
	function nextQuizClick() {
		correct ? navigate(createNextQuizUrl()) : window.location.reload();
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
						onClick={nextQuizClick}
					>
						{correct ? 'Siguiente desafio' : 'Volver a intentarlo'}
					</Button>
					<Button
						_hover={{ bgColor: 'error', color: 'black' }}
						variant={'outline'}
						color={'error'}
						width={'80%'}
						padding={'1rem  1.5rem'}
						onClick={handleClick}
					>
						Volver al Menú principal
					</Button>
				</Flex>
			</ModalBody>
		</ModalContent>
	);
};
