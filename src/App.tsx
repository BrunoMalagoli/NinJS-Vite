import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AnswersContextProvider from './context/answers/AnswersContextProvider';
import DataContextProvider from './context/data/DataContextProvider';
import ProfileContextProvider from './context/profile/ProfileContextProvider';
import { AppRoutes } from './routes/AppRouter';
import theme from './styles/theme';
import 'react-toastify/dist/ReactToastify.css';
import NavBarContextProvider from './context/navBar/NavBarContextProvider';

function App() {
	return (
		<ChakraProvider theme={theme}>
			<BrowserRouter>
				<DataContextProvider>
					<ProfileContextProvider>
						<AnswersContextProvider>
							<NavBarContextProvider>
								<>
									<ToastContainer />
									<AppRoutes />
								</>
							</NavBarContextProvider>
						</AnswersContextProvider>
					</ProfileContextProvider>
				</DataContextProvider>
			</BrowserRouter>
		</ChakraProvider>
	);
}

export default App;
