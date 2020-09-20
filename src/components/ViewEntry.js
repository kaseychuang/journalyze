import React, {useEffect, useState} from 'react';
import "./ViewEntry.css";
import NavBar from './NavBar.js';
import axios from 'axios';

const ViewEntry = (props) => {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [content, setContent] = useState("");
    const [score, setScore] = useState(0);
    const [userScore, setUserScore] = useState(0);
    
    // should get info from that entry from the backend 
    useEffect(() => {
        const getEntryData = async () => {
            try{
                const id = props.match.params.id;
                console.log(id);
                // make call to backend
                const entry = await axios.get("http://localhost:5000/entry/" + id)
                setDate((new Date(entry.data.date)).toLocaleDateString() + ' ' + (new Date(entry.data.date)).toLocaleTimeString());
                setTitle(entry.data.title);
                setContent(entry.data.body);
                setScore(entry.data.score);
                var tempScore = Math.abs(entry.data.score.toFixed(2) * 100);
                if (entry.data.score < 0) {
                    tempScore = 50 - (tempScore / 2);
                }
                else {
                    tempScore = 50 + (tempScore / 2);
                }
                setUserScore(tempScore);
            } catch(e){
                alert("Unable to get entry, please refresh")
            }
          
            // set state based on entry data
        }
        getEntryData();
    }, [])

    return (
        <div>
            <NavBar title = "journalyze" />
            <div id="entry">
                <div className = "entry-header">
                    <h3 id = "entry-title">{title}</h3>
                    <p id = "entry-date">{date}</p>
                </div>
                <p id = "entry-content">{content}</p>
            </div>
            <div className="entry-analysis">
                <p className="entry-score">Score: {userScore}/100</p>
                😡<meter min={0} max={100} value={userScore}></meter>🥰
                <p className="entry-emotion">Emotion: [EMOTION]</p>
            </div>
        </div>
    )
}

export default ViewEntry;