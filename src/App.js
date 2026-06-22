import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import HomeScreen from './screens/Home';
import PortfolioScreen from './screens/Portfolio';
import PortfolioDetailScreen from './screens/PortfolioDetail';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/portfolio/detail" exact component={PortfolioDetailScreen} />
        <Route path="/portfolio" exact component={PortfolioScreen} />
        <Route path="/resume" exact render={() => <Redirect to="/#experience" />} />
        <Route path="/" exact component={HomeScreen} />
      </Switch>
    </Router>
  );
}

export default App;
