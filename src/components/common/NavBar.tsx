import React from 'react';
import './NavBar.css'
import HomePage from './../../pages/homePage/HomePage';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

const NavBar = () => {

    return <>
        <div className={'wrapper-common-navbar'}>
            <Link to="/">Sign In</Link>
            <Link to="/registration">Sign Up</Link>
            <Link to="/homePage">Home</Link>
            <Link to="/users">Users</Link>
        </div>
    </>
}

export default NavBar;
