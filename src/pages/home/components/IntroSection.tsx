import { Container, Flex, Heading, Image, Text } from '@chakra-ui/react';
import styles from './styles/IntroSection.module.css';

const IntroSection = () => {
	return (
		<Container
			bgColor={'#16191C'}
			padding={'0'}
			height={'45vh'}
			maxWidth={'100%'}
			paddingBottom={'3%'}
		>
			<Flex
				height={'100%'}
				width={'100%'}
				justifyContent={'center'}
				alignItems={'center'}
				wrap={'wrap'}
			>
				<Heading
					fontSize={'3xl'}
					color={'primaryYellow'}
					textAlign={'center'}
					width={'100%'}
				>
					Forja tu propio camino ninja...
				</Heading>
				<Image className={styles.cornerRight} src='/temple-corner.svg' />
				<Image className={styles.cornerLeft} src='/temple-corner.svg' />
				<Image
					width={'100%'}
					height={'40%'}
					src='/ninja.svg'
					alt='Ninja mask'
				/>
				<Text
					color={'primaryYellow'}
					fontSize={'xl'}
					fontWeight={'bold'}
					textAlign={'center'}
				>
					...y escala hasta lo mas alto del ranking
				</Text>
			</Flex>
		</Container>
	);
};

export default IntroSection;
