import { Box, Container, Flex, Avatar, Link, Button } from '@chakra-ui/react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import styles from './styles/DevSection.module.css';
const DevSection = () => {
	return (
		<Container bgColor={'primaryBG'} className={styles.container}>
			<Flex className={styles.cardsContainer}>
				<Box bgColor={'transparent'} className={styles.devCard}>
					<Flex
						paddingTop={'6%'}
						justifyContent={'space-between'}
						alignItems={'center'}
						flexDirection={'column'}
						height={'100%'}
					>
						<Box>
							<Avatar
								size={'2xl'}
								src='/BrunoProfile.jpg'
								name='Bruno Malagoli Avatar'
							/>
						</Box>
						<Flex
							height={'100%'}
							flexDirection={'column'}
							justifyContent={'space-evenly'}
						>
							<Button
								variant={'ghost'}
								height={'10px'}
								leftIcon={<FaLinkedin color='#F8D859' />}
								_hover={{ bgColor: 'none' }}
							>
								<Link
									color={'primaryYellow'}
									href='https://www.linkedin.com/in/bruno-malagoli/'
									fontSize={'xl'}
								>
									Bruno's LinkedIn
								</Link>
							</Button>
							<Button
								variant={'ghost'}
								height={'10px'}
								leftIcon={<FaGithub color='#F8D859' />}
								_hover={{ bgColor: 'none' }}
							>
								<Link
									color={'primaryYellow'}
									href='https://github.com/BrunoMalagoli'
									fontSize={'xl'}
								>
									Bruno's GitHub
								</Link>
							</Button>
						</Flex>
					</Flex>
				</Box>
				<Box bgColor={'transparent'} className={styles.devCard}>
					<Flex
						paddingTop={'6%'}
						justifyContent={'space-between'}
						alignItems={'center'}
						flexDirection={'column'}
						height={'100%'}
					>
						<Avatar
							size={'2xl'}
							src='/GermanProfile.png'
							name='German Hornus Avatar'
						/>
						<Flex
							height={'100%'}
							flexDirection={'column'}
							justifyContent={'space-evenly'}
						>
							<Button
								variant={'ghost'}
								height={'10px'}
								leftIcon={<FaLinkedin color='#F8D859' />}
								_hover={{ bgColor: 'none' }}
							>
								<Link
									color={'primaryYellow'}
									href='https://www.linkedin.com/in/german-hornus-438003226/'
									fontSize={'xl'}
								>
									German's LinkedIn
								</Link>
							</Button>
							<Button
								variant={'ghost'}
								height={'10px'}
								leftIcon={<FaGithub color=' #F8D859' />}
								_hover={{ bgColor: 'none' }}
							>
								<Link
									color={'primaryYellow'}
									href='https://github.com/charly8888'
									fontSize={'xl'}
								>
									German's GitHub
								</Link>
							</Button>
						</Flex>
					</Flex>
				</Box>
				<Box bgColor={'transparent'} className={styles.devCard}>
					<Flex
						paddingTop={'6%'}
						justifyContent={'space-between'}
						alignItems={'center'}
						flexDirection={'column'}
						height={'100%'}
					>
						<Avatar
							size={'2xl'}
							src='/JalProfile.png'
							name='Jalinson Diaz Avatar'
						/>
						<Flex
							height={'100%'}
							flexDirection={'column'}
							justifyContent={'space-evenly'}
						>
							<Button
								variant={'ghost'}
								height={'10px'}
								leftIcon={<FaLinkedin color='#F8D859' />}
								_hover={{ bgColor: 'none' }}
							>
								<Link
									color={'primaryYellow'}
									href='https://www.linkedin.com/in/jalinson-diaz/'
									fontSize={'xl'}
								>
									Jalinson's LinkedIn
								</Link>
							</Button>
							<Button
								variant={'ghost'}
								height={'10px'}
								leftIcon={<FaGithub color='#F8D859' />}
								_hover={{ bgColor: 'none' }}
							>
								<Link
									color={'primaryYellow'}
									href='https://github.com/zJaaal'
									fontSize={'xl'}
								>
									Jalinson's GitHub
								</Link>
							</Button>
						</Flex>
					</Flex>
				</Box>
			</Flex>
		</Container>
	);
};

export default DevSection;
