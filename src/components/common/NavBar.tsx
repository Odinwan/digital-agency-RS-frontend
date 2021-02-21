import React from 'react';
import './NavBar.css'

import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

const NavBar = () => {

    return <>
        <div className={'wrapper-common-navbar'}>
            <Link to="/">LogIn</Link>
            <Link to="/about">About</Link>
            <Link to="/users">Users</Link>
            <Link to="/registration">Registration</Link>
        </div>
    </>
}

export default NavBar;
