import React from 'react';
import "./Activity.css";


const emojis = {
    "sad": "😢", 
    "happy": "🥰", 
    "angry": "😡", 
    "bored": "🥱", 
    "fear":  "😱", 
    "excited": "🤩"
}

const EmojiList = (props) => {

    return(
        <div>
            <hr className="separator"></hr>
            <h1 className="center suggest-heading">View Other Activities Below</h1>
            
            <div id="emoji-list">
                <div className="emoji-container">
                    <button className="emoji">{emojis[props.emojis[0]]}<br></br><p className="emotion center">{props.emojis[0]}</p></button>
                </div>
                <div className="emoji-container">
                    <button className="emoji">{emojis[props.emojis[1]]}<br></br><p className="emotion center">{props.emojis[1]}</p></button>
                </div>
                <div className="emoji-container">
                    <button className="emoji">{emojis[props.emojis[2]]}<br></br><p className="emotion center">{props.emojis[2]}</p></button>
                </div>
                <div className="emoji-container">
                    <button className="emoji">{emojis[props.emojis[3]]}<br></br><p className="emotion center">{props.emojis[3]}</p></button>
                </div>
            </div>
        </div>
       
    )
}

export default EmojiList;