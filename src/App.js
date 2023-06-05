import React from 'react';
import { Routes,Route,BrowserRouter } from 'react-router-dom';
import Product from './Pages/Product';
import Home from './Pages/Home';
import './styles.css';
import PaymentComponent from './Pages/Payments';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import '@fontsource/poppins';

const theme = extendTheme({
  fonts: {
    body: 'Poppins, sans-serif',
    heading: 'Poppins, sans-serif',
  },
});

const App = () => {
  return (
    <>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/payments" element={<PaymentComponent />} />
        </Routes>
      </ChakraProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
