import React, {useState } from 'react';
import { Redirect } from 'react-router-dom';
import "./Entry.css";

const Entry = (props) => {
    const [redirect, setRedirect] = useState(false);

    // if user clicks on a specific entry, it will redirect to that entry's view page
    // will put in id to render correct entry later
    const renderView = () => {
        if (redirect) {
            return <Redirect push to = {"entry/" + props.data._id} />
        }
        else {
            return (
                <div onClick={() => setRedirect(true)} id="entry-preview">
                    <div className="entry-header">
                        <p id="entry-title">{props.data.title}</p>
                        <p id="entry-date">{(new Date(props.data.date)).toLocaleDateString() + ' ' + (new Date(props.data.date)).toLocaleTimeString()}</p>
                    </div>
                    {/* this should only be the first few lines */}
                    <p id="entry-snippet">{props.data.body.substr(0, 200) + "..."}</p>
                </div>
            )
        }
    }

    return (
       renderView()
    )
}

export default Entry;