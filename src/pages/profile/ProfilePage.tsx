import { useContext } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import Avatar from 'boring-avatars';
import ProfileContext from '../../context/profile/ProfileContext';
import UsernameInput from './components/UsernameInput';
import CircleProgressBar from '../dashboard/components/CircleProgressBar/CIrcleProgressBar';

const ProfilePage = () => {
	const { variant, username } = useContext(ProfileContext);
	return (
		<Flex
			h='100%'
			p='1em'
			flexDirection={'column'}
			alignItems='center'
			overflowY={'scroll'}
		>
			<Flex
				direction={'row'}
				p='16px'
				borderRadius={'0.5em'}
				color={'white'}
				w='95%'
				fontSize={{ base: '80px', md: '100px' }}
			>
				<Avatar name={username} variant={variant} size={'1em'} />
				<Flex
					direction='column'
					flexGrow={1}
					pl='24px'
					justifyContent={'center'}
				>
					<Text color={'white'} fontSize={{ base: 'md', md: 'xl' }}>
						{username}
					</Text>
					<Text color={'white'} fontSize={{ base: 'xs', sm: 'md', md: 'xl' }}>
						Completadas: 14 / 48
					</Text>
				</Flex>
			</Flex>
			<Flex
				justifyContent={'space-evenly'}
				width='100%'
				gap={4}
				fontSize={{ base: '7px', sm: '8px', md: '10px', lg: '12px' }}
			>
				<CircleProgressBar
					passed={37}
					errors={9}
					speedAnimation={5}
					title={'Genin'}
				/>
				<CircleProgressBar
					passed={91}
					errors={1}
					speedAnimation={5}
					title={'Chunin'}
				/>
				<CircleProgressBar
					passed={7}
					errors={2}
					speedAnimation={5}
					title={'Jonin'}
				/>
			</Flex>
			<UsernameInput />
		</Flex>
	);
};

export default ProfilePage;
