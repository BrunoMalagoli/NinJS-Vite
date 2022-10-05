import { Flex, Text } from '@chakra-ui/react';
import Avatar from 'boring-avatars';
import { useContext } from 'react';
import DataContext from '../../context/data/DataContext';
import ProfileContext from '../../context/profile/ProfileContext';
import CircleProgressBar from '../dashboard/components/CircleProgressBar/CIrcleProgressBar';
import UsernameInput from './components/UsernameInput';

const ProfilePage = () => {
	const { variant, username, jonin, genin, chunin, completed } =
		useContext(ProfileContext);
	const { state } = useContext(DataContext);
	return (
		<Flex
			h={'100%'}
			px='1em'
			w='100%'
			flexDirection={'column'}
			alignItems='center'
			overflowY={'auto'}
		>
			<Flex flexDirection={'column'}>
				<Flex
					direction={'row'}
					py='16px'
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
							Completadas: {completed} /{' '}
							{state.data?.totalGenin +
								state.data?.totalChunin +
								state.data?.totalJonin}
						</Text>
					</Flex>
				</Flex>
				<Flex
					justifyContent={'space-between'}
					width='100%'
					gap={4}
					fontSize={{ base: '7px', sm: '8px', md: '10px', lg: '12px' }}
					// maxW=""
				>
					<CircleProgressBar
						passed={genin.passed}
						errors={genin.failed}
						speedAnimation={5}
						title={'Genin'}
					/>
					<CircleProgressBar
						passed={chunin.passed}
						errors={chunin.failed}
						speedAnimation={5}
						title={'Chunin'}
					/>
					<CircleProgressBar
						passed={jonin.passed}
						errors={jonin.failed}
						speedAnimation={5}
						title={'Jonin'}
					/>
				</Flex>
				<UsernameInput />
			</Flex>
		</Flex>
	);
};

export default ProfilePage;
