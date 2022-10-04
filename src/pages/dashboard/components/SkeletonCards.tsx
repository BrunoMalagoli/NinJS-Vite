import { Box, Flex, Skeleton } from '@chakra-ui/react';
import theme from '../../../styles/theme';
import { cardSize } from '../types';
const SkeletonCards = () => {
	const arr = ['s', 's', 's', 's', 's', 's', 's', 's', 's', 's'];

	return (
		<Box
			overflowY={'auto'}
			h='100%'
			w={{
				base: '100%',
				sm: '80%',
				md: '76%',
				lg: '68%',
				xl: '55%',
				'2xl': '50%'
			}}
		>
			<Flex
				justifyContent={'center'}
				alignContent={'flex-start'}
				flexWrap={'wrap'}
				p={'0.8em'}
				gap={4}
				h='100%'
			>
				{arr.map((_, i) => (
					<Skeleton
						key={i}
						startColor={theme.colors.primaryBGLight}
						endColor={theme.colors.primaryBGShade}
						borderRadius={'10px'}
						w={cardSize}
						h={cardSize}
					/>
				))}
			</Flex>
		</Box>
	);
};

export default SkeletonCards;
