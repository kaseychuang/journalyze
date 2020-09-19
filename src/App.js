import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home.js';
import ViewEntries from './components/ViewEntries.js';
import ViewEntry from './components/ViewEntry.js';

class App extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <Route path = "/" exact component = {Home} />
                    <Route path = "/entries" exact component = {ViewEntries} />
                    <Route path = "/entry" exact component = {ViewEntry} />

                </div>
            </Router>
        )
    }
}

export default App;