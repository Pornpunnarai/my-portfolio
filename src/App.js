import React from "react";

// Libraries
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

// Screens
import HomeScreen from "./screens/Home";

import './App.css';

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/" component={HomeScreen} />
          <Redirect from="/" to="/home" />
        </Switch>
      </Router>
  );
}

export default App;
