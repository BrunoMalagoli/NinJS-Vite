import {
	Avatar,
	Flex,
	Heading,
	IconButton,
	Select,
	Text
} from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';

import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import DataContext from '../../context/data/DataContext';
import theme from '../../styles/theme';
import QuizCardList from './components/quiz-card/QuizCardList';
import SkeletonCards from './components/SkeletonCards';

const Dashboard = () => {
	const [
		state,
		page,
		setPage,
		maxPage,
		setMaxPage,
		seturlSearchParams,
		urlSearchParams
	] = useContext(DataContext);

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
		seturlSearchParams({
			completed: 'all',
			difficult: 'all'
		});
		// setPage(1);
	}, []);

	useEffect(() => {
		setMaxPage(state?.data?.maxPage);
		if ((state?.error as Error)?.message.includes('Found')) {
			return setMaxPage(1);
		}
		if (page > maxPage) {
			setPage(maxPage);
		}
	}, [state]);

	return (
		<Flex
			w='100%'
			h='100vh'
			direction='column'
			backgroundColor={'#16191C'}
			alignItems='center'
		>
			<Flex
				justifyContent={'center'}
				alignItems='center'
				gap='1rem'
				mb='.7rem'
				mt='.7rem'
			>
				<Flex>
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
							variant={'filled'}
							value={urlSearchParams.completed}
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
						variant={'filled'}
						value={urlSearchParams.difficult}
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
						<option
							value='jonin'
							style={{
								backgroundColor: theme.colors.primaryBGShade,
								border: 'none'
							}}
						>
							Jonin
						</option>
					</Select>
				</Flex>
			</Flex>
			{state?.data?.questions.length ? (
				<QuizCardList QuizCards={state?.data?.questions} />
			) : state?.error ? (
				<Flex
					h='100%'
					justifyContent={'center'}
					alignItems='center'
					flexDir={'column'}
				>
					<Heading style={{ color: theme.colors.primaryYellow }}>Oh No</Heading>
					<Heading style={{ color: 'white', textAlign: 'center' }}>
						Parece que aun no tienes progreso.
					</Heading>
				</Flex>
			) : (
				<SkeletonCards />
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
	);
};

export default Dashboard;
