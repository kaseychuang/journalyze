import React, {useEffect, useState} from 'react';
import './Home.css';
import ViewEntries from './ViewEntries.js';
import NavBar from './NavBar.js';
import axios from 'axios';


const Home = () => {

    // const [greeting, setGreeting] = useState("What");
    
    // useEffect(async () => {
    //     // make call
    //     const data = await axios.get('http://localhost:5000/demo');
    //     setGreeting(data);

    // }, []);    
    
    return (
        <div id="main">
            <NavBar title = 'journalyze' />  
            <ViewEntries />
            {/* <p>Greeting {greeting}</p> */}
        </div>
    )
}

export default Home;