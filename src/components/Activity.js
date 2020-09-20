import React, {useEffect, useState} from 'react';
import './Home.css';
import NavBar from './NavBar.js';
import './Activity.css';

const Moodivities = () => {

    return (
        <div>
            <div className="activity-container">
                <div className="emoji-container">
                    <button className="emoji">😰<br></br><p class="emotion center">exhausted</p></button>
                </div>
                <div className="activity center">
                    <p>Exercise to de-stress after a long day</p>
                </div>
            </div>
            
            <div className="activity-container">
                <div className="emoji-container">
                    <button className="emoji">😔<br></br><p class="emotion center">tired</p></button>
                </div>
                <div className="activity center">
                    <p>Treat yourself with your favorite food, movie, or video game</p>
                </div>
            </div>

            <div id="emoji-list">
                <div className="emoji-container">
                    <button className="emoji">💩<br></br><p class="emotion center">poop</p></button>
                </div>
                <div className="emoji-container">
                    <button className="emoji">🥰<br></br><p class="emotion center">grateful</p></button>
                </div>
                <div className="emoji-container">
                    <button className="emoji">😇<br></br><p class="emotion center">blessed</p></button>
                </div>
                <div className="emoji-container">
                    <button className="emoji">😣<br></br><p class="emotion center">upset</p></button>
                </div>
                <div className="emoji-container">
                    <button className="emoji">😢<br></br><p class="emotion center">sad</p></button>
                </div>
                <div className="emoji-container">
                    <button className="emoji">😡<br></br><p class="emotion center">angry</p></button>
                </div>
            </div>
        </div>
    )
}

export default Moodivities;