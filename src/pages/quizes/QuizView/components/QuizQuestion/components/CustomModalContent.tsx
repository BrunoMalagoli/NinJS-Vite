import { ModalContentProps } from './types/index';
import { FC, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
	Button,
	Flex,
	ModalBody,
	ModalContent,
	ModalHeader,
	Text
} from '@chakra-ui/react';
import createNextQuizUrl from '../../../../../../helpers/createNextQuizUrl';
import DataContext from '../../../../../../context/data/DataContext';

export const CustomModalContent: FC<ModalContentProps> = ({
	correct,
	explanation,
	onClose
}) => {
	const navigate = useNavigate();

	const location = useLocation();

	const { totalQuestions } = useContext(DataContext);

	const { totalGenin, totalChunin, totalJonin } = totalQuestions;

	function handleClick() {
		navigate('/home');
	}

	function nextQuizClick() {
		correct
			? navigate(
					createNextQuizUrl(
						location.pathname,
						totalGenin,
						totalChunin,
						totalJonin
					)
			  )
			: onClose();
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
					style={{
						paddingBottom: '5%',
						color: correct ? '#02B65C' : '#C0354A'
					}}
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
