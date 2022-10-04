import {
	Avatar,
	Box,
	Button,
	Flex,
	IconButton,
	Link,
	Text
} from '@chakra-ui/react';
import { FC } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './styles/DevSection.module.css';
import { DevCardProp } from './types';
export const DevCard: FC<DevCardProp> = ({
	name,
	githubURL,
	linkedinURL,
	profilePic
}) => {
	let firstName = name.split(' ')[0];
	const handleClick = (url: string) => {
		window.open(url, '_blank');
	};
	return (
		<Box bgColor={'transparent'} className={styles.devCard} padding={'12px'}>
			<Flex
				justifyContent={'space-between'}
				alignItems={'center'}
				flexDirection={'column'}
				height={'100%'}
			>
				<Box>
					<Avatar
						size={'2xl'}
						src={profilePic}
						name={`${name} Avatar`}
						bg={'transparent'}
					/>
				</Box>
				<Flex
					width={'100%'}
					height={'100%'}
					flexDirection={'column'}
					justifyContent={'center'}
				>
					<Text
						textAlign={'center'}
						fontSize={'3xl'}
						fontWeight={'bold'}
						color={'primaryYellow'}
					>
						{firstName}
					</Text>
					<Flex gap={4} justifyContent={'center'}>
						<IconButton
							_hover={{ bgColor: 'transparent' }}
							_active={{ bgColor: 'transparent' }}
							variant={'ghost'}
							aria-label='LinkedIn Icon'
							icon={<FaLinkedin fontSize={'2rem'} color='#F8D859' />}
							onClick={() => handleClick(linkedinURL)}
						/>
						<IconButton
							_hover={{ bgColor: 'transparent' }}
							_active={{ bgColor: 'transparent' }}
							variant={'ghost'}
							aria-label='Github Icon'
							icon={<FaGithub fontSize={'2rem'} color='#F8D859' />}
							onClick={() => handleClick(githubURL)}
						/>
					</Flex>
				</Flex>
			</Flex>
		</Box>
	);
};
