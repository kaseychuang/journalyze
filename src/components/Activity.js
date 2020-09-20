import React, {useEffect, useState} from 'react';
import './Activity.css';
import '../ActivityData.json';
import EmojiList from './EmojiList.js';
const json = require('../ActivityData.json');

const Moodivities = () => {
    const [activity1, setActivity1] = useState("");
    const [activity2, setActivity2] = useState("");
    const [emotion1, setEmotion1] = useState("");
    const [emotion2, setEmotion2] = useState("");

    const emojis = {
        "sad": "😢", 
        "happy": "🥰", 
        "angry": "😡", 
        "bored": "🥱", 
        "fear":  "😱", 
        "excited": "🤩"
    }

    // Pull data and pick two activities from JSON file 
    useEffect(() => {
        setActivity1(json["fear"][Math.floor(Math.random() * json["fear"].length)]);
        setActivity2(json["happy"][Math.floor(Math.random() * json["happy"].length)]);
        setEmotion1("fear");
        setEmotion2("happy");
        
    }, [])

    const getOtherEmojis = () => {
        return Object.keys(emojis).filter((emoji) => {
            if (emoji !== emotion1 && emoji !== emotion2){
                console.log(emoji);
                return emoji;
            }
        })
    }
    
    return (
        <div>
            <div className="activity-container">
                <div className="emoji-container">
                    <button className="emoji">{emojis[emotion1]}<br></br><p className="emotion center">{emotion1}</p></button>
                </div>
                <div className="activity center">
                    <p>{activity1}</p>
                </div>
            </div>
            
            <div className="activity-container">
                <div className="emoji-container">
                    <button className="emoji">{emojis[emotion2]}<br></br><p className="emotion center">{emotion2}</p></button>
                </div>
                <div className="activity center">
                    <p>{activity2}</p>
                </div>
            </div>
            <EmojiList emojis = {getOtherEmojis()}/>
        </div>
    )
}

export default Moodivities;