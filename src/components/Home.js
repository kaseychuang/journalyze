import React, {useEffect, useState} from 'react';
import './Home.css';
import ViewEntries from './ViewEntries.js';
import NavBar from './NavBar.js';
import axios from 'axios';


const Home = () => {
    
    return (
        <div id="main">
            <NavBar title = 'journalyze' />  
            <ViewEntries />
            {/* <p>Greeting {greeting}</p> */}
        </div>
    )
}

export default Home;