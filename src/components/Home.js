import React from 'react';
import ViewEntries from './ViewEntries.js';
import NavBar from './NavBar.js';


const Home = () => {
    
    return (
        <div className="center">
            <NavBar title = 'journalyze' page  = "Home" />  
            <ViewEntries />
        </div>
    )
}

export default Home;