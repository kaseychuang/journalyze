import React from 'react';
import NavBar from './NavBar.js';

// clicking on an entry will send you to the ViewEntry for that speciic page

const ViewStats = () => {
    return (
        <div class='dailycount'>
            <NavBar title = 'overall stats' />  
            <p>trial and eroor baby, trial and error</p> 
        </div>
    )
}

export default ViewStats;