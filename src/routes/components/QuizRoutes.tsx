import { Route, Routes } from 'react-router-dom';
import NotFound from '../../pages/404/NotFound';
import QuizView from '../../pages/quizes/QuizView/QuizView';
const QuizRoutes = () => {
	return (
		<Routes>
			<Route path='/:category/:id' element={<QuizView />} />
			<Route path='/*' element={<NotFound />} />
		</Routes>
	);
};

export default QuizRoutes;
