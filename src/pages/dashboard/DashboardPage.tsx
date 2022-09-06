import { Avatar, Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import CircleProgressBar from './components/CircleProgressBar/CIrcleProgressBar';
import QuizCardList from './components/quiz-card/QuizCardList';
import SkeletonCards from './components/SkeletonCards';
import toastMaxPage from './components/toastMaxPage';
import toastLogout from './utils/toastLogout';

const Dashboard = () => {
	const [urlAvatar, setUrlAvatar] = useState(
		'https://avatars.githubusercontent.com/u/63567962?s=96&v=4'
	);
	const [page, setPage] = useState(1);
	const [cardData, setCardData] = useState(null);
	const [skeletonCardData, setSkeletonCardData] = useState(true);

	const username = localStorage.getItem('username');
	const navigate = useNavigate();

	console.log({ page });
	function handleLogout() {
		toastLogout();
		localStorage.removeItem('token');
		localStorage.removeItem('username');
		navigate('/');
	}

	function handleChangePage(e: any) {
		// console.log(e.target.name);
		if (e.target.name === 'add') {
			setPage(page + 1);
		} else if (e.target.name === 'rest') {
			if (page === 1) {
				return;
			} else {
				setPage(page - 1);
			}
		} else return;
	}

	// useEffect(() => {
	// 	fetch(
	// 		`https://boring-avatars-api.vercel.app/api/avatar?size=40&variant=marble`
	// 	).then(e => console.log(e));
	// }, []);

	async function fetchData({ setCardData, setSkeletonCardData }) {
		try {
			const response = await fetch(
				`${import.meta.env.VITE_URL_CONECT_BACKEND}api/quiz/list?page=${page}`,
				{
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						'x-token': localStorage.getItem('token') || '2'
					}
				}
			);
			const data = await response.json();
			if (response.ok) {
				setCardData(data.result);
				setSkeletonCardData(false);
			} else {
				setSkeletonCardData(false);
				throw new Error(data?.ErrorMessage);
			}
		} catch (error) {
			setSkeletonCardData(false);
			setPage(page - 1);
			toastMaxPage();
			console.log(error);
		}
	}
	useEffect(() => {
		setCardData(null);
		fetchData({ setCardData, setSkeletonCardData });
		return () => setSkeletonCardData(true);
	}, [page]);

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
					{/* <Flex justifyContent={'center'} gap={4}>
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
					</Flex> */}
				</Flex>
				<Flex>
					<Button name='add' onClick={handleChangePage}>
						Pagina siguiente
					</Button>
					<Button name='rest' onClick={handleChangePage} disabled={page === 1}>
						Pagina Anterior
					</Button>
					<Heading color={'#fff'}> Page: {page}</Heading>
				</Flex>
				{cardData && <QuizCardList QuizCards={cardData} />}
				{skeletonCardData && <SkeletonCards />}
			</Flex>
		</>
	);
};

export default Dashboard;
