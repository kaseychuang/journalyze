import React, {useEffect, useState} from 'react'; // :c
import './Home.css';
import axios from 'axios';


const Home = () => {

    // const [greeting, setGreeting] = useState("What");
    
    // useEffect(async () => {
    //     // make call
    //     const data = await axios.get('http://localhost:5000/demo');
    //     setGreeting(data);

    // }, [])
    
    
    return (
        <div id="main">
            <p>journalyze journal lies journal eyes <strong>journmood</strong></p>
            {/* <p>Greeting {greeting}</p> */}
        </div>
    
        )
}

export default Home;