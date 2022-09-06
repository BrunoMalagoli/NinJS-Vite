import { Flex, Skeleton } from '@chakra-ui/react';
import theme from '../../../styles/theme';
const SkeletonCards = () => {
	const arr = ['s', 's', 's', 's', 's', 's', 's', 's', 's', 's'];

	return (
		<Flex
			justifyContent={'center'}
			alignContent={'center'}
			flexWrap={'wrap'}
			p={'0.5em'}
			gap={4}
			marginBottom={'55px'}
		>
			{arr.map((x, i) => (
				<Skeleton
					startColor={theme.colors.primaryBGLight}
					endColor={theme.colors.primaryBGShade}
					height='130px'
					width='130px'
				/>
			))}
		</Flex>
	);
};

export default SkeletonCards;
