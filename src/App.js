import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home.js';
import Moodivities from './components/Moodivities.js'
import './Util.css';
import NewEntry from './components/NewEntry.js'
import ViewEntry from './components/ViewEntry.js';
import ViewStats from './ViewStats.js';

class App extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <link href='https://fonts.googleapis.com/css?family=Quicksand' rel='stylesheet'></link>
                    <Route path = '/' exact component = {Home} />
                    <Route path = '/moodivities' exact component = {Moodivities} />
                    <Route path = '/entry' exact component = {ViewEntry} />
                    <Route path = '/new-entry' exact component = {NewEntry} />
                    <Route path = "/stats" exact component = {ViewStats} />
                </div>
            </Router>
        )
    }
}

export default App;