import { Box, Container, Flex, Avatar, Link, Button } from '@chakra-ui/react';
import { DevCard } from './DevCard';
import styles from './styles/DevSection.module.css';
const DevSection = () => {
	return (
		<Container bgColor={'primaryBG'} className={styles.container}>
			<Flex className={styles.cardsContainer}>
				<DevCard
					name={'Bruno Malagoli'}
					githubURL={'https://github.com/BrunoMalagoli'}
					linkedinURL={'https://www.linkedin.com/in/bruno-malagoli/'}
					profilePic={'https://avatars.githubusercontent.com/u/87399643?v=4'}
				/>
				<DevCard
					name={'German Hornus'}
					githubURL={'https://github.com/charly8888'}
					linkedinURL={'https://www.linkedin.com/in/german-hornus-438003226/'}
					profilePic={'https://avatars.githubusercontent.com/u/91563520?v=4'}
				/>
				<DevCard
					name={'Jalinson Diaz'}
					githubURL={'https://github.com/zJaaal'}
					linkedinURL={'https://www.linkedin.com/in/jalinson-diaz/'}
					profilePic={'https://avatars.githubusercontent.com/u/63567962?v=4'}
				/>
			</Flex>
		</Container>
	);
};

export default DevSection;
