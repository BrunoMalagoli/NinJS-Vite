import { Box, Flex } from '@chakra-ui/react';

const SkeletonCards = () => {
	const arr = ['s', 's', 's', 's', 's', 's', 's', 's', 's', 's'];

	return (
		<Box overflowY={'scroll'}>
			<Flex
				justifyContent={'center'}
				alignContent={'center'}
				flexWrap={'wrap'}
				p={'0.5em'}
				gap={4}
			>
				{arr.map(() => (
					<Box
						className={`s`}
						w='8rem'
						h='8rem'
						background={'gray'}
						borderRadius={'10px'}
					></Box>
				))}
			</Flex>
		</Box>
	);
};

export default SkeletonCards;
