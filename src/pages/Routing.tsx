import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import About from './About';

import Users from './Users';
import NavBar from './../components/common/NavBar';
import LogIn from './logIn/LogIn';
import Registration from './registration/Registration';

const Routing = () => {

    return (
        <div className={'mainWrapper'}>
            <Router>
                <NavBar />
                <Switch>
                    <Route path="/registration">
                        <Registration />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/users">
                        <Users />
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
