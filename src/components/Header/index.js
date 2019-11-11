import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./style.css";

const Header = () => (
    <header id="main-header">
        <ul>
            <li><a href="/">Home</a></li>
            <li>About</li>
        </ul>
    </header>
);

export default Header;