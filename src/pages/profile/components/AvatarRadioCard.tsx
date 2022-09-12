import { Box, useRadio, Text, Flex } from '@chakra-ui/react';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import Avatar from 'boring-avatars';
import { FC, useContext } from 'react';
import ProfileContext from '../../../context/profile/ProfileContext';
import theme from '../../../styles/theme';
import { AvatarRadioCardProps } from '../types';

const AvatarRadioCard: FC<AvatarRadioCardProps> = ({
	variant,
	props
}): ReactJSXElement => {
	const { getInputProps, getCheckboxProps } = useRadio(props);
	const { username } = useContext(ProfileContext);
	const input = getInputProps();
	const checkbox = getCheckboxProps();
	return (
		<Box as='label'>
			<input {...input} />
			<Flex
				{...checkbox}
				flexDirection='column'
				alignItems={'center'}
				p={'8px'}
				m={'3px'}
				borderRadius='16px'
				_checked={{
					backgroundColor: theme.colors.primaryBGLight
				}}
				style={{
					transition: 'background-color ease-in-out 0.5s '
				}}
			>
				<Avatar variant={variant} name={username} size='1em' />
				<Text fontSize={{ base: 'sm', md: 'lg' }} color='white' pt='5px'>
					{variant}
				</Text>
			</Flex>
		</Box>
	);
};

export default AvatarRadioCard;
