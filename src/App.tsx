import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AnswersContextProvider from './context/answers/AnswersContextProvider';
import DataContextProvider from './context/data/DataContextProvider';
import ProfileContextProvider from './context/profile/ProfileContextProvider';
import { AppRoutes } from './routes/AppRouter';
import theme from './styles/theme';

import { createContext, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';

export const isNavBarOpenOrNot = createContext({} as any);

function App() {
	const [isOpenNavBar, setIsOpenNavBar] = useState(true);
	return (
		<ChakraProvider theme={theme}>
			<BrowserRouter>
				<DataContextProvider>
					<ProfileContextProvider>
						<AnswersContextProvider>
							<>
								<ToastContainer />
								<isNavBarOpenOrNot.Provider
									value={{ isOpenNavBar, setIsOpenNavBar }}
								>
									<AppRoutes />
								</isNavBarOpenOrNot.Provider>
							</>
						</AnswersContextProvider>
					</ProfileContextProvider>
				</DataContextProvider>
			</BrowserRouter>
		</ChakraProvider>
	);
}

export default App;
