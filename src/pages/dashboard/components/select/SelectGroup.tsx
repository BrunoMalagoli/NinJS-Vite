import { Flex, Text } from '@chakra-ui/react';
import { CompletedFilter, DifficultFilter } from '../../../../types';
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
					options={Object.values(CompletedFilter)}
					name={'completed'}
				/>
			</Flex>
			<Flex flexDirection={'column'} alignItems='center' width={'130px'}>
				<Text color={'#fff'} marginBottom='5px'>
					Dificultad
				</Text>
				<SelectComponent
					options={Object.values(DifficultFilter)}
					name={'difficult'}
				/>
			</Flex>
		</Flex>
	);
};

export default SelectGroup;
