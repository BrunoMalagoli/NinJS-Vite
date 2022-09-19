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
import { Else, If, Then } from '../../components/If/If';
import DataContext from '../../context/data/DataContext';
import theme from '../../styles/theme';
import NotFoundDashboard from './components/NotFoundDashboard';
import QuizCardList from './components/quiz-card/QuizCardList';
import SelectGroup from './components/select/SelectGroup';
import SkeletonCards from './components/SkeletonCards';

const Dashboard = () => {
	const { state, page, setPage, maxPage, setMaxPage, seturlSearchParams } =
		useContext(DataContext);

	function handleChangePageMinus(e: any) {
		setPage(page - 1);
	}
	function handleChangePageAdd(e: any) {
		setPage(page + 1);
	}
	useEffect(() => {
		seturlSearchParams({
			completed: 'Todas',
			difficult: 'Todas'
		});
		// setPage(1);
	}, []);

	useEffect(() => {
		state?.data?.maxPage && setMaxPage(state?.data?.maxPage);

		if ((state?.error as Error)?.message.includes('Found') && page < 2) {
			return setMaxPage(1);
		}
		// } else if (
		// 	(state?.error as Error)?.message.includes('Found') &&
		// 	page > maxPage
		// ) {
		// 	state?.data?.maxPage && setMaxPage(state?.data?.maxPage);
		// 	return setPage(maxPage);
		// }
	}, [state]);

	return (
		<Flex
			w='100%'
			h='100vh'
			direction='column'
			backgroundColor={'#16191C'}
			alignItems='center'
		>
			<SelectGroup />
			<If predicate={Boolean(state?.data?.questions.length)}>
				<Then>
					<QuizCardList QuizCards={state?.data?.questions} />
				</Then>
				<Else>
					<If predicate={Boolean(state?.error)}>
						<Then>
							<NotFoundDashboard />
						</Then>
						<Else>
							<SkeletonCards />
						</Else>
					</If>
				</Else>
			</If>
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
