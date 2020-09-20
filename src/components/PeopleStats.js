import React, {useEffect, useState} from 'react';
import './ViewStats.css';
import axios from 'axios';
import { render } from '@testing-library/react';

const PeopleStats = () => {

    const [entries, setEntries] = useState({"positive": [], "negative": []});

    useEffect(() => {
        const getEntries = async () => {
            // make call
            const data = await axios.get('http://localhost:5000/entities/extremes/people');
            setEntries(data.data);
            console.log(data.data);
        }
        getEntries();

    }, [])

    const renderPositive = () => {
        return (entries.positive).map(element => {
            return (<tr><td>{element.name}</td></tr>);
        });
    }

    const renderNegative = () => {
        return (entries.negative).map(element => {
            return (<tr><td>{element.name}</td></tr>);
        });
    }

    return (
        <div>
            <p className="center">Check out the table below for the people that you tend to be positive or negative towards</p>
            <div className="names">
                <table className="positive">
                    <tr>
                        <th>Positive</th>
                    </tr>
                    {renderPositive()}
                </table>
                <table className="negative">
                    <tr>
                        <th>Negative</th>
                    </tr>
                    {renderNegative()}
                </table>
            </div>
        </div>
    )
}

export default PeopleStats;