import { Container, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';

const IntroSection = () => {
	return (
		<Container
			bgColor={'primaryYellow'}
			padding={'0'}
			height={'60vh'}
			minWidth={'100%'}
		>
			<Flex
				height={'100%'}
				width={'100%'}
				justifyContent={'center'}
				alignItems={'center'}
				wrap={'wrap'}
			>
				<Heading textAlign={'center'} width={'100%'}>
					Conviertete en un verdadero ninja...
				</Heading>
				<Image
					width={'100%'}
					height={'40%'}
					src='/ninja.svg'
					alt='Ninja mask'
				/>
				<Text fontSize={'xl'} fontWeight={'bold'} textAlign={'center'}>
					...y haz tu camino hacia lo mas alto
				</Text>
			</Flex>
		</Container>
	);
};

export default IntroSection;
