import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/NavBar.js';
import Home from './components/Home.js';
import Moodivities from './components/Moodivities.js'
import './Util.css';
import ViewEntries from './components/ViewEntries.js';
import ViewEntry from './components/ViewEntry.js';

class App extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <NavBar/>
                    <link href='https://fonts.googleapis.com/css?family=Quicksand' rel='stylesheet'></link>
                    <Route path = "/" exact component = {Home} />
                    <Route path = "/moodivities" exact component = {Moodivities} />
                    <Route path = "/entries" exact component = {ViewEntries} />
                    <Route path = "/entry" exact component = {ViewEntry} />
                </div>
            </Router>
        )
    }
}

export default App;