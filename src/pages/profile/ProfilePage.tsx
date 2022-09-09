import { Flex, Text } from '@chakra-ui/react';
import Avatar from 'boring-avatars';
import { useContext } from 'react';
import ProfileContext from '../../context/profile/ProfileContext';
import CircleProgressBar from '../dashboard/components/CircleProgressBar/CIrcleProgressBar';
import AvatarRadioGroup from './components/AvatarRadioGroup';

const ProfilePage = () => {
	const { variant, username } = useContext(ProfileContext);
	return (
		<Flex h='100%' p='1em' flexDirection={'column'}>
			<Flex
				direction={'row'}
				p='1em'
				borderRadius={'0.5em'}
				color={'white'}
				w='95%'
				mt={'1em'}
			>
				<Avatar name={username} variant={variant} size={'100px'} />
				<Flex
					direction='column'
					flexGrow={1}
					pl='1.5em'
					justifyContent={'center'}
				>
					<Text color={'white'} fontSize={{ base: 'md', md: 'xl' }}>
						{username}
					</Text>
					<Text color={'white'} fontSize={{ base: 'md', md: 'xl' }}>
						Completed: 14 / 48
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
			<AvatarRadioGroup />
		</Flex>
	);
};
/* <Avatar name={'zJaaal'} variant='bauhaus' size={'100px'} />
			<Avatar name={'zJaaal'} variant='ring' size={'100px'} />
			<Avatar name={'zJaaal'} variant='beam' size={'100px'} />
			<Avatar name={'zJaaal'} variant='pixel' size={'100px'} />
			<Avatar name={'zJaaal'} variant='sunset' size={'100px'} /> */
export default ProfilePage;
