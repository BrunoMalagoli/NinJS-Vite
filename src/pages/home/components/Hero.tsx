import { useNavigate } from 'react-router-dom';
import { Button, Container, Flex, Heading, Text } from '@chakra-ui/react';

import styles from '../index.module.css';

export const Hero = () => {
	const navigate = useNavigate();

	return (
		<Container
			minWidth={'100%'}
			bg={'black'}
			bgImage={"url('/bamboo2.png')"}
			bgPos={'center'}
			bgSize={'fill'}
			className={styles.heroContainer}
		>
			<Flex
				minHeight={'85vh'}
				justify={'center'}
				alignItems='center'
				flexDir={'column'}
				gap={8}
			>
				<Heading display={'inline-flex'} color={'white'} as='h1' size='4xl'>
					Nin<Text color={'primaryYellow'}>JS</Text>
				</Heading>
				<Button
					onClick={() => {
						navigate('/login', { replace: true });
					}}
					bgColor={'primaryYellow'}
					variant={'outline'}
				>
					Empezar
				</Button>
			</Flex>
		</Container>
	);
};
