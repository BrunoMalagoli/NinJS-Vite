import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import DataContextProvider from './context/DataContextProvider';
import { AppRoutes } from './routes/AppRouter';
import theme from './styles/theme';

function App() {
	return (
		<ChakraProvider theme={theme}>
			<BrowserRouter>
				<ToastContainer />
				<DataContextProvider>
					<AppRoutes />
				</DataContextProvider>
			</BrowserRouter>
		</ChakraProvider>
	);
}

export default App;
