import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/AppRouter';
import theme from './styles/theme';

function App() {
	return (
		<ChakraProvider theme={theme}>
			<BrowserRouter>
				<AppRoutes />
			</BrowserRouter>
		</ChakraProvider>
	);
}

export default App;
