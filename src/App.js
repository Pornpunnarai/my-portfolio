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
import PortfolioScreen from "./screens/Portfolio";
import ResumeScreen from "./screens/Resume";
import PortfolioDetailScreen from "./screens/PortfolioDetail";

import './App.css';

function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route path={"/resume"} exact={true} component={ResumeScreen}/>
                    <Route path={"/portfolio"} exact={true} component={PortfolioScreen}/>
                    <Route path={"/portfolio/detail"} exact={true} component={(props) =>  <PortfolioDetailScreen {...props} />} />
                    <Route path={"/"} exact={true} component={HomeScreen}/>
                </Switch>
            </Router>
        </>
    );
}

export default App;
