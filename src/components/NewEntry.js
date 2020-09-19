import React, {useEffect, useState} from 'react';
import NavBar from './NavBar.js';
import './ViewEntry.css';
import './NewEntry.css';
import { findAllInRenderedTree } from 'react-dom/test-utils';
import axios from 'axios';

const NewEntry = () => {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    
    
    const handleSubmit = (event) => {
        event.preventDefault();
    //     axios({
    //         url: 'http://localhost:5000/save',
    //         method: 'POST',
    //         data: { title, body }
    //     })
    //     .then((data) => {
    //         console.log(data)
    //     })
    //     .catch((error) => {
    //         console.log("error: ", error)
    //     });;
    // };
        axios.post('http://localhost:5000/save', { title, body, date: new Date() })
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.log("error: ", error);
            });
        };
    
    
    return (
        <div>
            <NavBar title = 'new journal entry' />
            <div id="entry">
                <form id="new-entry-form" className="center" onSubmit={handleSubmit}>
                    <input type="text" id="entry-title" className="center spacing" onChange={(e) => {setTitle(e.target.value)}} value={title} placeholder="Enter a title here..." required></input>
                    <br></br>
                    <textarea rows="5" id="entry-snippet" className="spacing" onChange={(e) => {setBody(e.target.value)}} value={body} form="new-entry-form" placeholder="Begin your journal entry here..." required></textarea>
                    <br></br>
                    <button className="button center done">Done</button>
                </form> 
            </div>
        </div>
    )
}

export default NewEntry;