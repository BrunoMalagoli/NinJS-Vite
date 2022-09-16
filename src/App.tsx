import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AnswersContextProvider from './context/answers/AnswersContextProvider';
import DataContextProvider from './context/data/DataContextProvider';
import ProfileContextProvider from './context/profile/ProfileContextProvider';
import { AppRoutes } from './routes/AppRouter';
import theme from './styles/theme';

function App() {
	return (
		<ChakraProvider theme={theme}>
			<BrowserRouter>
				<ToastContainer />
				<DataContextProvider>
					<ProfileContextProvider>
						<AnswersContextProvider>
							<AppRoutes />
						</AnswersContextProvider>
					</ProfileContextProvider>
				</DataContextProvider>
			</BrowserRouter>
		</ChakraProvider>
	);
}

export default App;
