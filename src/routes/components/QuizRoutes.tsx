import { Route, Routes } from 'react-router-dom';
import QuizView from '../../pages/quizes/QuizView/QuizView';
const QuizRoutes = () => {
  return (
   <Routes>
    <Route path='/:category/:id' element={<QuizView/>}/>
   </Routes>
  )
}

export default QuizRoutes