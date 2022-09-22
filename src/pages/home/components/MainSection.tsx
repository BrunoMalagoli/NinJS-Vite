import { Box, Container, Flex } from '@chakra-ui/react';

import styles from './styles/MainSection.module.css';

const MainSection = () => {
	return (
		<Flex className={styles.sectionContainer}>
			<Box className={styles.sectionCards}>
				<Box height={'15rem'} width={'100%'}></Box>
			</Box>
			<Box className={styles.sectionCards}></Box>
		</Flex>
	);
};

export default MainSection;
