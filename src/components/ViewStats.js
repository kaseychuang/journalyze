import React from 'react';
import NavBar from './NavBar.js';

// clicking on an entry will send you to the ViewEntry for that speciic page

const ViewStats = () => {
    return (
        <div>
            <NavBar title = 'new journal entry' />
            <div id="entry">
                <p>Post Count:</p>
            </div>
        </div>
    )
}

export default ViewStats;