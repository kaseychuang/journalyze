import React, { useState, useEffect } from 'react';
import "./Activity.css";
const json = require('../ActivityData.json');


const emojis = {
    "sad": "😢",
    "happy": "🥰",
    "angry": "😡",
    "bored": "🥱",
    "fear": "😱",
    "excited": "🤩"
}

const EmojiList = (props) => {
    const [selectedEmotion, setSelectedEmotion] = useState("")
    const [activity, setActivity] = useState("");

    useEffect(() => {
        // get an activity
        if (selectedEmotion !== "") {
            setActivity(json[selectedEmotion][Math.floor(Math.random() * json[selectedEmotion].length)]);
        }

    }, [selectedEmotion])

    const renderActivity = () => {
        if (selectedEmotion) {
            return (
                <div align="center">
                    <div id="display-activity" className="box arrow-top">
                        <p className="center">{activity}</p>
                    </div>
                </div>
            )
        }
    }

    const renderButtons = () => {
        return (props.emojis.map((emoji) => {
            return (
                <button
                    onClick={() => { setSelectedEmotion(emoji) }}
                    className={`emoji ${emoji === selectedEmotion ? "active" : ""}`}>{emojis[emoji]}<br></br><p className="emotion center">{emoji}</p></button>
            )
        }));
    }

    return (
        <div >
            <hr className="separator"></hr>
            <div id="other-activities">
                <h1 className="center suggest-heading">View Other Activities Below</h1>

                <div id="emoji-list">
                    {renderButtons()}
                </div>
                {renderActivity()}
            </div>

        </div>

    )
}

export default EmojiList;