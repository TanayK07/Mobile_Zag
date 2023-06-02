import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Product from './Pages/Product';
import Home from './Pages/Home';
import './styles.css';
import PaymentComponent from './Pages/Payments';


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
