import React from 'react';
import NavBar from './NavBar.js';
import './ViewEntry.css';
import './NewEntry.css';

const NewEntry = () => {
    const currentDate = (new Date()).toDateString();
    return (
        <div>
            <NavBar title = 'new journal entry' />
            <div id="entry">
                <form id="new-entry-form" className="center">
                    <input type="text" id="entry-title" className="center spacing" placeholder="Enter a title here..." required></input>
                    <br></br>
                    <textarea rows="5" id="entry-snippet" className="spacing" form="new-entry-form" placeholder="Begin your journal entry here..." required></textarea>
                    <br></br>
                    <button className="button center done">Done</button>
                </form> 
            </div>
        </div>
    )
}

export default NewEntry;