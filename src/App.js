import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Product from './Pages/Product';
import Home from './Pages/Home';
import './styles.css';
import PaymentComponent from './Pages/Payments';

const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/payments" element={<PaymentComponent />} />
      </Routes>
    </Router>
  );
};

export default App;
