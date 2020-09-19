import React, {useEffect, useState} from 'react'; // :c
import './NavBar.css';

const NavBar = () => {    
    
    return (
        <div class="navbar">
            <a href="/" className="navbar-button button home">Home</a>
            <p className="title center">journalyze</p>
            <a href="/moodivities" className="navbar-button button moodivities">Moodivities</a>
        </div>
    
        )
}

export default NavBar;