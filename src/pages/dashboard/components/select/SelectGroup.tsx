import { Select, Flex, Text } from '@chakra-ui/react';
import React, { useContext } from 'react';
import DataContext from '../../../../context/data/DataContext';
import theme from '../../../../styles/theme';
import SelectComponent from './SelectComponent';

const SelectGroup = () => {
	return (
		<Flex
			justifyContent={'center'}
			alignItems='center'
			mb='.7rem'
			mt='.7rem'
			width={'100%'}
			gap={6}
		>
			<Flex flexDirection={'column'} alignItems='center' width={'130px'}>
				<Text color={'#fff'} marginBottom='5px'>
					Estado
				</Text>
				<SelectComponent
					options={['Todas', 'Aprobadas', 'Falladas']}
					name={'completed'}
				/>
			</Flex>
			<Flex flexDirection={'column'} alignItems='center' width={'130px'}>
				<Text color={'#fff'} marginBottom='5px'>
					Dificultad
				</Text>
				<SelectComponent
					options={['Todas', 'Genin', 'Chunin', 'Jonin']}
					name={'difficult'}
				/>
			</Flex>
		</Flex>
	);
};

export default SelectGroup;
