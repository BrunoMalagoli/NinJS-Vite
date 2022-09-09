import {
	Avatar,
	Flex,
	Heading,
	IconButton,
	Select,
	Text
} from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';

import QuizCardList from './components/quiz-card/QuizCardList';
import SkeletonCards from './components/SkeletonCards';

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

	function handleChangePageMinus(e: any) {
		setPage(page - 1);
	}
	function handleChangePageAdd(e: any) {
		return setPage(page + 1);
	}
	useEffect(() => {
		if ((state?.error as Error)?.message.includes('Found')) {
			setMaxPage(1);
		}
		setMaxPage(state?.data?.maxPage);
		if (page > maxPage) {
			setPage(maxPage);
		}
	}, [state]);

	return (
		<>
			<Flex w='100%' h='100%' direction='column' backgroundColor={'#16191C'}>
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
				</Flex>
				<Flex
					justifyContent={'center'}
					alignItems='center'
					gap='1rem'
					mb='.7rem'
					mt='.7rem'
				>
					<Flex flexDirection={'column'} alignItems='center'>
						<Text color={'#fff'} marginBottom='5px'>
							Estado
						</Text>
						<Select
							onChange={handleSetFilters}
							name='completed'
							color={'white'}
							w='125px'
							backgroundColor={theme.colors.primaryBGShade}
							variant={'outlined'}
						>
							<option
								value='all'
								style={{
									backgroundColor: theme.colors.primaryBGShade,
									border: 'none'
								}}
							>
								Todas
							</option>
							<option
								value='aprobadas'
								style={{
									backgroundColor: theme.colors.primaryBGShade,
									border: 'none'
								}}
							>
								Aprobadas
							</option>
							<option
								value='falladas'
								style={{
									backgroundColor: theme.colors.primaryBGShade,
									border: 'none'
								}}
							>
								Falladas
							</option>
						</Select>
					</Flex>
					<Flex flexDirection={'column'} alignItems='center'>
						<Text color={'#fff'} marginBottom='5px'>
							Dificultad
						</Text>
						<Select
							onChange={handleSetFilters}
							name='difficult'
							color={'white'}
							w='125px'
							backgroundColor={theme.colors.primaryBGShade}
							variant={'outlined'}
						>
							<option
								value='all'
								style={{
									backgroundColor: theme.colors.primaryBGShade,
									border: 'none'
								}}
							>
								Todas
							</option>
							<option
								value='jonin'
								style={{
									backgroundColor: theme.colors.primaryBGShade,
									border: 'none'
								}}
							>
								Jonin
							</option>
							<option
								value='genin'
								style={{
									backgroundColor: theme.colors.primaryBGShade,
									border: 'none'
								}}
							>
								Genin
							</option>
							<option
								value='chunin'
								style={{
									backgroundColor: theme.colors.primaryBGShade,
									border: 'none'
								}}
							>
								Chunin
							</option>
						</Select>
					</Flex>
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
				<Flex
					justifyContent={'center'}
					gap='1rem'
					alignItems='center'
					mb={'4rem'}
					mt='.70rem'
				>
					<IconButton
						aria-label='Search database'
						onClick={handleChangePageMinus}
						disabled={page === 1}
						background={theme.colors.primaryYellow}
						icon={<AiOutlineLeft />}
					/>
					<Text color={'#fff'}>{page}</Text>
					<IconButton
						aria-label='Search database'
						icon={<AiOutlineRight />}
						onClick={handleChangePageAdd}
						disabled={page == maxPage}
						background={theme.colors.primaryYellow}
					/>
				</Flex>
			</Flex>
		</>
	);
};

export default Dashboard;
