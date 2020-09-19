import React, {useEffect, useState} from 'react';
import "./ViewEntry.css";
import NavBar from './NavBar.js';

const ViewEntry = (props) => {
    const [title, setTitle] = useState("default title");
    const [date, setDate] = useState("default date");
    const [content, setContent] = useState("Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?");
    
    // should get info from that entry from the backend 
    useEffect(() => {
        const getEntryData = async () => {
            const id = props.match.params.id;
            console.log(id);
            // make call to backend


            // set state based on entry data
        }
        getEntryData();
    }, [])

    return (
        <div>
            <NavBar title = {title} />
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