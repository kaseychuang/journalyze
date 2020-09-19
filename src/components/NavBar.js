import React from 'react';
import './NavBar.css';

const NavBar = (props) => {    
    
    return (
        <div className="navbar">
            <a href="/" className="navbar-button button home">Home</a>
            <p className="title center">{props.title}</p>
            <a href="/moodivities" className="navbar-button button moodivities">Moodivities</a>
        </div>
    )
}

export default NavBar;