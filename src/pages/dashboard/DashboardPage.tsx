import { Avatar, Button, Flex, Heading, Select, Text } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';

import QuizCardList from './components/quiz-card/QuizCardList';
import SkeletonCards from './components/SkeletonCards';
import toastMaxPage from './components/toastMaxPage';

import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import 'react-toastify/dist/ReactToastify.css';
import DataContext from '../../context/DataContext';
import theme from '../../styles/theme';

const Dashboard = () => {
	const [urlAvatar, setUrlAvatar] = useState(
		'https://avatars.githubusercontent.com/u/63567962?s=96&v=4'
	);

	const [state, page, setPage, maxPage, setMaxPage, seturlSearchParams] =
		useContext(DataContext);

	const username = localStorage.getItem('username');

	console.log({ state });

	function handleSetFilters(e: any) {
		switch (e.target.name) {
			case 'completed':
				seturlSearchParams((prev: any) => ({
					...prev,
					completed: e.target.value
				}));
				setPage(1);
				break;
			case 'difficult':
				seturlSearchParams((prev: any) => ({
					...prev,
					difficult: e.target.value
				}));
				setPage(1);
				break;
			default:
				setPage(1);
		}
	}

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
			toastMaxPage();
			setMaxPage(1);
		}
		setMaxPage(state?.data?.maxPage);
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
				<Flex justifyContent={'center'} alignItems='center' gap='1rem'>
					<Text color={'#fff'}>Estado: </Text>
					<Select
						onChange={handleSetFilters}
						name='completed'
						color={'white'}
						w='auto'
					>
						<option value='all'>Todas</option>
						<option value='aprobadas'>Aprobadas</option>
						<option value='falladas'>Falladas</option>
					</Select>
					<Text color={'#fff'}>Dificultad: </Text>
					<Select
						onChange={handleSetFilters}
						name='difficult'
						color={'white'}
						w='auto'
					>
						<option value='all'>Todas</option>
						<option value='jonin'>Jonin</option>
						<option value='genin'>Genin</option>
						<option value='chunin'>Chunin</option>
					</Select>
					{/* <Text color={'#fff'}>Completed</Text> */}
					{/* <Checkbox onChange={handleSetFilters} name='completed' /> */}
				</Flex>
				{!state.data && !state?.error && <SkeletonCards />}
				{state?.data?.questions.length ? (
					<QuizCardList QuizCards={state?.data?.questions} />
				) : (
					state.error && (
						<Flex h='100%' justifyContent={'center'} alignItems='center'>
							<Heading style={{ color: 'white' }}>Not Found</Heading>
						</Flex>
					)
				)}
				{state?.data?.questions.length && (
					<Flex
						justifyContent={'center'}
						gap='1rem'
						alignItems='center'
						mb={'4rem'}
					>
						<Button
							name='rest'
							onClick={handleChangePage}
							disabled={page === 1}
							background={theme.colors.primaryYellow}
						>
							<AiOutlineLeft />
						</Button>
						<Text color={'#fff'}>{page}</Text>
						<Button
							name='add'
							onClick={handleChangePage}
							disabled={page == maxPage}
							background={theme.colors.primaryYellow}
						>
							<AiOutlineRight />
						</Button>
					</Flex>
				)}
			</Flex>
		</>
	);
};

export default Dashboard;
