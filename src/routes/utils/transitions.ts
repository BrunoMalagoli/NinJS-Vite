import { background } from '@chakra-ui/react';
import { transform, Variants } from 'framer-motion';

export const pageTransition: Variants = {
	in: {
		translateX: 0
	},
	out: {
		translateX: '100vw'
	}
};
