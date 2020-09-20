import React from 'react';
import NavBar from './NavBar.js';
import PeopleStats from './PeopleStats.js';

const ViewStats = () => {
    return (
        <div>
            <NavBar title = 'overall stats' />
            <div id="entry">
                <p>Post Count:</p>
            </div>
            <PeopleStats />
        </div>
    )
}

export default ViewStats;