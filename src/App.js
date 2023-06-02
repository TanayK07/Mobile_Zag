import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Product from './Pages/Product';
import { extendTheme } from '@chakra-ui/react';
import Home from './Pages/Home';
import './styles.css';
import PaymentComponent from './Pages/Payments';

const theme = extendTheme({
  fonts: {
    body: 'Poppins, sans-serif',
    heading: 'PoppinsSemi-Bold, sans-serif',
  },
});

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/product" component={Product} />
        <Route path="/payments" component={PaymentComponent} />

      </Switch>
    </Router>
  );
};

export default App;
