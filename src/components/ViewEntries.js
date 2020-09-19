import React from 'react';
import Entry from './Entry';

// clicking on an entry will send you to the ViewEntry for that specific page

const ViewEntries = () => {

    const [entries, setEntries] = useState([]);
    
    useEffect(async () => {
        // make call
        const data = await axios.get('http://localhost:5000/demo');
        setEntries(data);

    }, [entries])


    return (
        <div>
            <div id = "home-buttons">
                <a className = "button new-entry-button" href = "/new-entry">new journal entry</a>
                <a className = "button view-stats" href = "#">view stats</a>
            </div>
            <Entry key = "id 123" title = "Bad Day" date = "6/14/20" snippet = "Hello therekajskldfjasldkjf" />
            <Entry key = "id here" title = "Terrible Day" date = "6/15/20" snippet = "Sed ut persptur?"/> 
        </div>
    )
}

export default ViewEntries;