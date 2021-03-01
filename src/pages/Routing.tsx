import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Users from './Users';
import NavBar from './../components/common/NavBar';
import LogIn from './logIn/LogIn';
import Registration from './registration/Registration';
import HomePage from './homePage/HomePage';

const Routing = () => {

    return (
        <div className={'mainWrapper'}>
            <Router>
                <NavBar />
                <Switch>
                    <Route path="/homePage">
                        <HomePage />
                    </Route>
                    <Route path="/users">
                        <Users />
                    </Route>
                    <Route path="/registration">
                        <Registration />
                    </Route>
                    <Route path="/">
                        <LogIn />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Routing;
