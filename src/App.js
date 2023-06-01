import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Product from './Pages/Product';
import Home from './Pages/Home';
import '@fontsource/poppins';



const theme = extendTheme({
  fonts: {
    body: 'Poppins, sans-serif',
    heading: 'Poppins, sans-serif',
  },
});

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/product" component={Product} />
      </Switch>
    </Router>
  );
};

export default App;
