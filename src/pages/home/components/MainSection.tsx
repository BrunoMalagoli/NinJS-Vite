import { useEffect } from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';
import CircleProgressBar from '../../dashboard/components/CircleProgressBar/CIrcleProgressBar';
import styles from './styles/MainSection.module.css';
import { useState } from 'react';

const MainSection = () => {
	const [count, setCount] = useState(0);
	useEffect(() => {
		let intervalId = setInterval(() => {
			if (count >= 40) return;
			setCount(x => ++x);
		}, 200);
		if (count >= 40) {
			clearInterval(intervalId);
		}
		return () => {
			clearInterval(intervalId);
		};
	}, [count]);

	return (
		<Flex className={styles.sectionContainer}>
			<Box className={styles.sectionCards}>
				<Flex
					height={'100%'}
					fontSize={{ base: '10px', sm: '10px', md: '12px' }}
					flexDirection={'column'}
					justifyContent={'space-around'}
				>
					<Text
						paddingTop={'10px'}
						paddingX={'10px'}
						textAlign={'center'}
						fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }}
						fontWeight={'bold'}
						as={'h3'}
						color={'primaryYellow'}
					>
						Alcanza tu maximo potencial
					</Text>

					<CircleProgressBar
						passed={100}
						errors={0}
						speedAnimation={15}
						title={'Genin'}
					/>
				</Flex>
			</Box>
			<Box className={styles.sectionCards}>
				<Flex
					height={'100%'}
					flexDirection={'column'}
					gap={1}
					justifyContent={'space-evenly'}
				>
					<Text
						textAlign={'center'}
						as={'h3'}
						fontWeight={'bold'}
						fontSize={{ base: '7xl', lg: '8xl' }}
						color={'white'}
					>
						+{count}
					</Text>
					<Text
						fontSize={'2xl'}
						fontWeight={'bold'}
						textAlign={'center'}
						color={'primaryYellow'}
						padding={'15px'}
					>
						desafios para poner a prueba tus habilidades
					</Text>
				</Flex>
			</Box>
		</Flex>
	);
};

export default MainSection;
