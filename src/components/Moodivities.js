import React, {useEffect, useState} from 'react';
import NavBar from './NavBar.js';
import './Moodivities.css';
import Activity from './Activity.js';

const Moodivities = () => {

    return (
        <div>
            <NavBar title = 'moodivities' />
            <h1 className="center suggest-heading">Suggested Activities to Improve Your Mental Health</h1>
            <Activity />
        </div>
    )
}

export default Moodivities;