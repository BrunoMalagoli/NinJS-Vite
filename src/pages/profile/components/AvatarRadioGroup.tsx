import { Flex, useRadioGroup } from '@chakra-ui/react';
import React, { useContext } from 'react';
import ProfileContext from '../../../context/profile/ProfileContext';
import theme from '../../../styles/theme';
import { Variants } from '../types';
import AvatarRadioCard from './AvatarRadioCard';

const AvatarRadioGroup = () => {
	const options = ['marble', 'beam', 'bauhaus', 'ring', 'sunset', 'pixel'];

	const { variant, setVariant } = useContext(ProfileContext);

	const { getRootProps, getRadioProps } = useRadioGroup({
		name: 'Avatar variant',
		defaultValue: variant,
		onChange: setVariant
	});

	const group = getRootProps();

	return (
		<Flex
			{...group}
			p='8px'
			m='10px'
			mx='0'
			fontSize={{ base: '60px', md: '80px' }}
			flexWrap={'wrap'}
			justifyContent='center'
			backgroundColor={theme.colors.primaryBGShade}
			borderRadius='16px'
		>
			{options.map(value => {
				const radio = getRadioProps({ value });
				return (
					<AvatarRadioCard
						key={value}
						props={radio}
						variant={value as Variants}
					/>
				);
			})}
		</Flex>
	);
};

export default AvatarRadioGroup;
