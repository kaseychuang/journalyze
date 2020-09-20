import React, { useEffect, useState } from 'react';
import NavBar from './NavBar.js';
import PeopleStats from './PeopleStats.js';
import './ViewStats.css';
import axios from 'axios';
import { Line, Pie } from 'react-chartjs-2';

const ViewStats = () => {
    const [stats, setStats] = useState([]);

    useEffect(() => {
        const getEntries = async () => {
            // make call
            const data = await axios.get('http://localhost:5000/stats');
            setStats(data.data);
            console.log(data);
        }
        getEntries();

    }, [])

    const getAgrScore = () => {
        let count = 0;
        let sum = 0;
        for (let i = 0; i < stats.length; i++) {
            count += 1;
            sum += stats[i]['score'];
        }
        return [sum / count, count];
    }

    const getData = () => {
        let count = 0;
        let sum = [0,0,0,0,0,0];
        for (let i = 0; i < stats.length; i++) {
            count += 1;
            sum[0] += stats[i]['emotion']['Angry'];
            sum[1] += stats[i]['emotion']['Excited'];
            sum[2] += stats[i]['emotion']['Happy'];
            sum[3] += stats[i]['emotion']['Sad'];
            sum[4] += stats[i]['emotion']['Fear'];
            sum[5] += stats[i]['emotion']['Bored'];
        }
        sum.forEach(item => {
            item = item/count;
        });;
        console.log("The array is: ", sum);
        return sum;
    }

    const getLineGraphData = () => {
        let dates = [];
        let scores = [];
        stats.forEach(item => {
            scores.push(item['score']);
            dates.push(new Date(item['date']).toLocaleDateString());
        });
        return [dates, scores];
    }

    const state = {
        labels: getLineGraphData()[0],
        datasets: [
            {
                fill: false,
                lineTension: 0.8,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 3,
                data: getLineGraphData()[1]
            }
        ]
    }

    const statePie = {
        labels: ['Angry', 'Excited', 'Happy',
            'Sad', 'Fear', 'Bored'],
        datasets: [
            {
                label: 'Average Mood',
                backgroundColor: [
                    '#B21F00',
                    '#C9DE00',
                    '#2FDE00',
                    '#00A6B4',
                    '#6800B4',
                    '#A9A9A9'
                ],
                hoverBackgroundColor: [
                    '#501800',
                    '#4B5000',
                    '#175000',
                    '#003350',
                    '#35014F',
                    '#808080'
                    
                ],
                data: getData()
            }
        ]
    }
    return (
        <div>
            <NavBar title='overall stats' />
            <div class="grid-container">
                <div class="grid-item grid-item2">Number of Posts: {getAgrScore()[1]}</div>
                <div class="grid-item grid-item2">Aggregate Score: {getAgrScore()[0]}</div>
            </div>
            <div align="center">
                <div class="grid-container-full">
                    <div class="grid-item">
                        <div>
                            <Line
                                data={state}
                                options={{
                                    title: {
                                        display: true,
                                        text: 'Sentiment Score for Past Entries',
                                        fontSize: 25
                                    },
                                    legend: {
                                        display: false
                                    }
                                }}
                            />
                        </div>
                    </div>
                    <div class="grid-item">
                        <div>
                            <Pie
                                data={statePie}
                                options={{
                                    title: {
                                        display: true,
                                        text: 'Average Aggregate Mood',
                                        fontSize: 25
                                    },
                                    legend: {
                                        display: true,
                                        position: 'right'
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <PeopleStats />
        </div>
    )
}

export default ViewStats;