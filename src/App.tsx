import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/components/AppRoutes";
function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
