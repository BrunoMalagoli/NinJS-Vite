import { Box, Container, Flex, Avatar, Link, Button } from '@chakra-ui/react';
import { BsLinkedin, BsGithub } from 'react-icons/Bs';
import styles from './styles/DevSection.module.css';
const DevSection = () => {
	return (
		<Container bgColor={'primaryBG'} className={styles.container}>
			<Flex className={styles.cardsContainer}>
				<Box bgColor={'#EFCB68'} className={styles.devCard}>
					<Flex
						paddingTop={'4%'}
						justifyContent={'center'}
						alignItems={'center'}
						flexDirection={'column'}
						gap={{ base: 4, sm: 6, md: 12, lg: 14 }}
					>
						<Box>
							<Avatar
								size={'xl'}
								src='/BrunoProfile.jpg'
								name='Bruno Malagoli Avatar'
							/>
						</Box>
						<Button variant={'ghost'} height={'10px'} leftIcon={<BsLinkedin />}>
							<Link href='https://www.linkedin.com/in/bruno-malagoli/'>
								Bruno's LinkedIn
							</Link>
						</Button>
						<Button variant={'ghost'} height={'10px'} leftIcon={<BsGithub />}>
							<Link href='https://github.com/BrunoMalagoli'>
								Bruno's GitHub
							</Link>
						</Button>
					</Flex>
				</Box>
				<Box bgColor={'#EFCB68'} className={styles.devCard}>
					<Flex
						paddingTop={'4%'}
						justifyContent={'center'}
						alignItems={'center'}
						flexDirection={'column'}
						gap={{ base: 4, sm: 6, md: 12, lg: 14 }}
					>
						<Avatar
							size={'xl'}
							src='/GermanProfile.png'
							name='German Hornus Avatar'
						/>
						<Button variant={'ghost'} height={'10px'} leftIcon={<BsLinkedin />}>
							<Link href='https://www.linkedin.com/in/german-hornus-438003226/'>
								German's LinkedIn
							</Link>
						</Button>
						<Button variant={'ghost'} height={'10px'} leftIcon={<BsGithub />}>
							<Link href='https://github.com/charly8888'>German's GitHub</Link>
						</Button>
					</Flex>
				</Box>
				<Box bgColor={'#EFCB68'} className={styles.devCard}>
					<Flex
						paddingTop={'4%'}
						justifyContent={'center'}
						alignItems={'center'}
						flexDirection={'column'}
						gap={{ base: 4, sm: 6, md: 10, lg: 14 }}
					>
						<Avatar
							size={'xl'}
							src='/JalProfile.png'
							name='Jalinson Diaz Avatar'
						/>
						<Button variant={'ghost'} height={'10px'} leftIcon={<BsLinkedin />}>
							<Link href='https://www.linkedin.com/in/jalinson-diaz/'>
								Jal's LinkedIn
							</Link>
						</Button>
						<Button variant={'ghost'} height={'10px'} leftIcon={<BsGithub />}>
							<Link href='https://github.com/zJaaal'>Jal's GitHub</Link>
						</Button>
					</Flex>
				</Box>
			</Flex>
		</Container>
	);
};

export default DevSection;
