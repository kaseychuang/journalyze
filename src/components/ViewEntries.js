import React, { useEffect, useState } from 'react';
import Entry from './Entry';
import axios from 'axios';

// clicking on an entry will send you to the ViewEntry for that specific page

const ViewEntries = () => {

    const [entries, setEntries] = useState([]);

    useEffect(() => {
        const getEntries = async () => {
            // make call
            const data = await axios.get('http://localhost:5000/entries');
            setEntries(data.data);
            console.log(data);
        }
        getEntries();

    }, [])

    const renderEntries = () => {
        return entries.map((entry) => {
            return <Entry data = {entry} key = {entry._id} />
            // return <Entry title = {entry.title} key = {entry._id} id = {entry._id} date = {entry.date} snippet = {entry.body.substr(0, 300) + "..."} />
        });
    }

    return (
        <div>
            <div id="home-buttons">
                <a className="button new-entry-button" href="/new-entry">new journal entry</a>
                <a className="button view-stats" href="/stats">view stats</a>
            </div>
            <div>
                {renderEntries()}
            </div>
        </div>
    )
}

export default ViewEntries;