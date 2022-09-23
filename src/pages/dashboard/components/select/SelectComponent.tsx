import { Select } from '@chakra-ui/react';
import { FC, useContext } from 'react';
import DataContext from '../../../../context/data/DataContext';
import theme from '../../../../styles/theme';
import SelectProps from './types';

const SelectComponent: FC<SelectProps> = ({ options, name }) => {
	const { setPage, seturlSearchParams, urlSearchParams } =
		useContext(DataContext);

	function handleSetFilters(e: any) {
		switch (e.target.name) {
			case 'completed':
				seturlSearchParams((prev: any) => ({
					...prev,
					completed: e.target.value
				}));
				setPage(1);
				break;
			case 'difficult':
				seturlSearchParams((prev: any) => ({
					...prev,
					difficult: e.target.value
				}));
				setPage(1);
				break;
			default:
				setPage(1);
		}
	}
	return (
		<Select
			onChange={handleSetFilters}
			name={name}
			color={'white'}
			w='130px'
			backgroundColor={theme.colors.primaryBGShade}
			variant={'filled'}
			value={urlSearchParams[name]}
			_focusVisible={{
				outline: 'none'
			}}
			_hover={{
				color: theme.colors.primaryBGShade,
				backgroundColor: theme.colors.primaryYellow,
				iconColor: theme.colors.primaryBGShade
			}}
		>
			{options.map((option, i) => (
				<option
					key={i}
					value={option}
					style={{
						backgroundColor: theme.colors.primaryBGShade,
						border: 'none',
						color: 'white'
					}}
				>
					{option}
				</option>
			))}
		</Select>
	);
};

export default SelectComponent;
