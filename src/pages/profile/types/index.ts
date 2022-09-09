import { UseRadioProps } from '@chakra-ui/react';

export type AvatarRadioCardProps = {
	variant: Variants;
	props: UseRadioProps;
};

export type Variants =
	| 'marble'
	| 'beam'
	| 'bauhaus'
	| 'ring'
	| 'sunset'
	| 'pixel';
