import React, {useEffect, useState} from 'react';
import "./ViewEntry.css";
import NavBar from './NavBar.js';
import axios from 'axios';

const ViewEntry = (props) => {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [content, setContent] = useState("");
    
    // should get info from that entry from the backend 
    useEffect(() => {
        const getEntryData = async () => {
            try{
                const id = props.match.params.id;
                console.log(id);
                // make call to backend
                const entry = await axios.get("http://localhost:5000/entry/" + id)
                setDate((new Date(entry.data.date)).toLocaleDateString() + ' ' + (new Date(entry.data.date)).toLocaleTimeString());
                setTitle(entry.data.title)
                setContent(entry.data.body);
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
                <a className = "button" id = "view-analysis-btn" href="#">View Analysis</a>
            </div>
        </div>
    )
}

export default ViewEntry;