import { AppRoutes } from './routes/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { ToastContainer } from 'react-toastify';
import theme from './styles/theme';
import DataContextProvider from './context/data/DataContextProvider';
import NavBarContextProvider from './context/navBar/NavBarContextProvider';
import AnswersContextProvider from './context/answers/AnswersContextProvider';
import ProfileContextProvider from './context/profile/ProfileContextProvider';
import 'react-toastify/dist/ReactToastify.css';

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
