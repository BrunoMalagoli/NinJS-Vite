import { Avatar, Box, Button, Flex, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CircleProgressBar from './components/CircleProgressBar/CIrcleProgressBar';
import MobileNavBar from './components/MobileNavBar';
import { cardData } from './components/quiz-card/data';
import QuizCardList from './components/quiz-card/QuizCardList';
import toastLogout from './utils/toastLogout';

const Dashboard = () => {
	const [urlAvatar, seturlAvatar] = useState(
		'https://avatars.githubusercontent.com/u/63567962?s=96&v=4'
	);
	const username = localStorage.getItem('username');
	const navigate = useNavigate();
	function handleLogout() {
		toastLogout();
		localStorage.removeItem('token');
		localStorage.removeItem('username');
		navigate('/');
	}
	// useEffect(() => {
	// 	fetch(
	// 		`https://boring-avatars-api.vercel.app/api/avatar?size=40&variant=marble`
	// 	).then(e => console.log(e));
	// }, []);

	return (
		<>
			<Flex w='100%' h='100vh' direction='column' backgroundColor={'#16191C'}>
				{/* <QuizCardList QuizCards={cardData} /> */}
				<Flex direction='column' flexGrow={1} alignItems='center'>
					<Flex
						direction={'row'}
						p='1em'
						borderRadius={'0.5em'}
						color={'white'}
						className='glass'
						w='95%'
						mt={'1em'}
					>
						<Avatar size='lg' src={urlAvatar} bg='transparent' />
						<Flex flexGrow={1} direction='column' pl='1.5em'>
							<Text>{username}</Text>
							<Text>Points: as 1213123</Text>
						</Flex>
						<Button onClick={handleLogout} bg='primaryYellow' color='black'>
							Logout
						</Button>
					</Flex>
					<Flex justifyContent={'center'} gap={4}>
						<CircleProgressBar
							passed={37}
							errors={9}
							speedAnimation={5}
							title={'Genin'}
						/>
						<CircleProgressBar
							passed={91}
							errors={1}
							speedAnimation={3}
							title={'Chunin'}
						/>
						<CircleProgressBar
							passed={7}
							errors={2}
							speedAnimation={5}
							title={'Jonin'}
						/>
					</Flex>
				</Flex>
				<QuizCardList QuizCards={cardData} />
				<Box display={{ md: 'none' }}>
					<MobileNavBar />
				</Box>
			</Flex>
		</>
	);
};

export default Dashboard;
