import React, {useEffect, useState} from 'react';
import './Home.css';
import NavBar from './NavBar.js';
import './Activity.css';

const Moodivities = () => {

    return (
        <div>
            <div className="activity-container">
                <div className="emoji-container">
                    <p className="emoji">😰</p>
                    <br></br><p class="emotion center">exhausted</p>
                </div>
                <div className="activity center">
                    <p>Exercise to de-stress after a long day</p>
                </div>
            </div>
            
            <div className="activity-container">
                <div className="emoji-container">
                    <p className="emoji">😔</p>
                    <br></br><p class="emotion center">tired</p>
                </div>
                <div className="activity center">
                    <p>Treat yourself with your favorite food, movie, or video game</p>
                </div>
            </div>

            <div id="emoji-list">
                
            </div>
        </div>
    )
}

export default Moodivities;