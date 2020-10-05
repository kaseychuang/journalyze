import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home.js';
import Moodivities from './components/Moodivities.js'
import './Util.css';
import NewEntry from './components/NewEntry.js'
import ViewEntry from './components/ViewEntry.js';
import ViewStats from './components/ViewStats.js';

class App extends React.Component {

    render() {
        return (
            <Router>
                <div>
                    <link href='https://fonts.googleapis.com/css?family=Quicksand' rel='stylesheet'></link>
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
                        rel="stylesheet"></link>
                    <Route path='/' exact component={Home} />
                    <Route path='/moodivities' exact component={Moodivities} />
                    <Route path='/entry/:id' exact component={ViewEntry} />
                    <Route path='/new-entry' exact component={NewEntry} />
                    <Route path="/stats" exact component={ViewStats} />
                </div>
            </Router>
        )
    }
}

export default App;