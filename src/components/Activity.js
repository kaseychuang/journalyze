import React, {useEffect, useState} from 'react';
import './Activity.css';
import '../ActivityData.json';
import EmojiList from './EmojiList.js';
import axios from 'axios';

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
        const getEntries = async () => {
            // make call
            const data = await axios.get('http://localhost:5000/entries');
            const lastEmotion = (data.data[data.data.length -1]).emotion;
            var valueList = Object.values(lastEmotion);
            valueList.sort();
            const max = valueList[valueList.length -1];
            const secondMax = valueList[valueList.length -2];
            var keyLower;

            for (const key of Object.keys(lastEmotion)) {
                if (lastEmotion[key] === max) {
                    keyLower = key.toLowerCase();
                    setEmotion1(keyLower);
                    setActivity1(json[keyLower][Math.floor(Math.random() * json[keyLower].length)]);
                }
                if (lastEmotion[key] === secondMax) {
                    keyLower = key.toLowerCase();
                    setEmotion2(keyLower);
                    setActivity2(json[keyLower][Math.floor(Math.random() * json[keyLower].length)]);
                }
            }           
        }
        getEntries();
    }, [])

    const getOtherEmojis = () => {
        return Object.keys(emojis).filter((emoji) => {
            if (emoji !== emotion1 && emoji !== emotion2){
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