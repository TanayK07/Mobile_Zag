import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Product from './Pages/Product';
import Home from './Pages/Home';
import './styles.css';
import PaymentComponent from './Pages/Payments';
import { Route,Routes } from 'react-router-dom';
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
    {/* {/* // <Router history={history}> */}
    <ChakraProvider theme={theme}>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/payments" element={<PaymentComponent />} />
 </Routes>
  </ChakraProvider>
    {/* // </Router> */} 
    </>
  );
};

export default App;
