import { AppRoutes } from './routes/AppRouter';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './styles/theme';
import DataContextProvider from './context/data/DataContextProvider';
import ProfileContextProvider from './context/profile/ProfileContextProvider';
import AnswersContextProvider from './context/answers/AnswersContextProvider';

import 'react-toastify/dist/ReactToastify.css';
function App() {
	return (
		<ChakraProvider theme={theme}>
			<BrowserRouter>
				<DataContextProvider>
					<ProfileContextProvider>
						<AnswersContextProvider>
							<>
								<ToastContainer />
								<AppRoutes />
							</>
						</AnswersContextProvider>
					</ProfileContextProvider>
				</DataContextProvider>
			</BrowserRouter>
		</ChakraProvider>
	);
}

export default App;
