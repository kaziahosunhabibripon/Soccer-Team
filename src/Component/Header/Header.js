import React from 'react';
import './Header.css';
import logo from '../../Images/bg.jpg';

const Header = () => {
    return (
        <div className="main-container">
            <img src={logo} alt="stadium" className="header-img" />
            <h1 className="centered"> Soccer Team </h1>
        </div>
    );
};

export default Header;