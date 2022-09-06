import { useNavigate } from 'react-router-dom';
import { Avatar, Button, Flex, Heading, Text } from '@chakra-ui/react';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { QuizCardProps } from './types';
import toastMaxPage from './components/toastMaxPage';
import QuizCardList from './components/quiz-card/QuizCardList';
import SkeletonCards from './components/SkeletonCards';
import CircleProgressBar from './components/CircleProgressBar/CIrcleProgressBar';

import 'react-toastify/dist/ReactToastify.css';
const Dashboard = () => {
	const [urlAvatar, setUrlAvatar] = useState(
		'https://avatars.githubusercontent.com/u/63567962?s=96&v=4'
	);
	const [page, setPage] = useState(1);
	const [cardData, setCardData] = useState<QuizCardProps[]>([]);
	const [skeletonCardData, setSkeletonCardData] = useState(true);

	const username = localStorage.getItem('username');
	const navigate = useNavigate();

	function handleChangePage(e: any) {
		// console.log(e.target.name);
		if (e.target.name === 'add') {
			return setPage(page + 1);
		}
		if (page !== 1) {
			setPage(page - 1);
		}
	}

	// useEffect(() => {
	// 	fetch(
	// 		`https://boring-avatars-api.vercel.app/api/avatar?size=40&variant=marble`
	// 	).then(e => console.log(e));
	// }, []);

	async function fetchData(
		setCardData: Dispatch<SetStateAction<QuizCardProps[]>>,
		setSkeletonCardData: Dispatch<SetStateAction<boolean>>
	) {
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
		setCardData([]);
		fetchData(setCardData, setSkeletonCardData);
		return () => setSkeletonCardData(true);
	}, [page]);

	return (
		<>
			<Flex w='100%' h='100vh' direction='column' backgroundColor={'#16191C'}>
				{/* <QuizCardList QuizCards={cardData} /> */}
				<Flex direction='column' alignItems='center'>
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
						<Flex direction='column' flexGrow={1} pl='1.5em'>
							<Text>{username}</Text>
							<Text>Points: as 1213123</Text>
						</Flex>
					</Flex>
					<Flex
						justifyContent={'space-evenly'}
						width='100%'
						gap={4}
						fontSize='8px'
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
				<Flex>
					<Button name='add' onClick={handleChangePage}>
						Pagina siguiente
					</Button>
					<Button name='rest' onClick={handleChangePage} disabled={page === 1}>
						Pagina Anterior
					</Button>
					<Heading color={'#fff'}> Page: {page}</Heading>
				</Flex>
				{cardData.length && <QuizCardList QuizCards={cardData} />}
				{skeletonCardData && <SkeletonCards />}
			</Flex>
		</>
	);
};

export default Dashboard;
