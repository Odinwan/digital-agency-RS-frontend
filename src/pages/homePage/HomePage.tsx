import React from 'react';
import './HomePage.css';
import bigLogo from '../../img/HomePage/leadrium.svg';
import arrowRightSmall from '../../img/HomePage/arrowRightSmall.svg';
import { Link, useHistory } from "react-router-dom";

const HomePage = () => {
    let history = useHistory();
    return(
    <>
        <div className="header">
            <div className="container">
                <div className="tagline-wrapper">
                    <div className="tagline">Агенство digital-решений для бизнеса</div>
                </div>
            </div>
        </div>
        <div className="section-big-logo">
            <div className="container">
                <div className="tagline-wrapper">
                    <img src={bigLogo} alt="LEADRIUM" className="big-logo" />
                </div>
            </div>
        </div>
        <div className="showreel">
            <div className="container">
                <div className="showreel-wrapper">
                    
                        <div onClick={() => history.push("/users")} style={{display: 'flex',cursor: 'pointer'}}>
                            <div>НАШ ШОУРИЛ</div>
                            <img src={arrowRightSmall} alt="arrow" />
                        </div>
                
                </div>
            </div>
        </div>
    </>
)}

export default HomePage;