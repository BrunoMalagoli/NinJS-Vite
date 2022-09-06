import { Avatar, Button, Flex, Heading, Text } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';

import toastMaxPage from './components/toastMaxPage';
import QuizCardList from './components/quiz-card/QuizCardList';
import SkeletonCards from './components/SkeletonCards';
import CircleProgressBar from './components/CircleProgressBar/CIrcleProgressBar';

import 'react-toastify/dist/ReactToastify.css';
import DataContext from '../../context/dataContext';
const Dashboard = () => {
	const [urlAvatar, setUrlAvatar] = useState(
		'https://avatars.githubusercontent.com/u/63567962?s=96&v=4'
	);

	const [state, page, setPage, maxPage, setMaxPage] = useContext(DataContext);

	const username = localStorage.getItem('username');

	function handleChangePage(e: any) {
		if (e.target.name === 'add') {
			return setPage(page + 1);
		}
		if (page !== 1) {
			setPage(page - 1);
		}
	}
	useEffect(() => {
		if ((state?.error as Error)?.message.includes('Found')) {
			setMaxPage(page);
			toastMaxPage();
			setPage(page - 1);
		}
	}, [state]);

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
					{/* <Flex
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
					</Flex> */}
				</Flex>
				<Flex>
					<Button
						name='add'
						onClick={handleChangePage}
						disabled={page == maxPage - 1}
					>
						Pagina siguiente
					</Button>
					<Button name='rest' onClick={handleChangePage} disabled={page === 1}>
						Pagina Anterior
					</Button>
					<Heading color={'#fff'}> Page: {page}</Heading>
				</Flex>
				{state?.data?.length ? (
					<QuizCardList QuizCards={state?.data} />
				) : (
					state.error && <h1 style={{ color: 'white' }}>Not Found</h1>
				)}
				{!state.data && !state?.error && <SkeletonCards />}
			</Flex>
		</>
	);
};

export default Dashboard;
