import React from 'react';
import './Home.css';
import ViewEntries from './ViewEntries.js';
import NavBar from './NavBar.js';

const Home = () => {
    
    return (
        <div id="main">
            <NavBar title = 'journalyze' />  
            <ViewEntries />
        </div>
    )
}

export default Home;