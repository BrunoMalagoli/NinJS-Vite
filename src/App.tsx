import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import DataContextProvider from './context/data/DataContextProvider';
import ProfileContextProvider from './context/profile/ProfileContextProvider';
import { AppRoutes } from './routes/AppRouter';
import theme from './styles/theme';

function App() {
	return (
		<ChakraProvider theme={theme}>
			<BrowserRouter>
				<ToastContainer />
				<AppRoutes />
			</BrowserRouter>
		</ChakraProvider>
	);
}

export default App;
