import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home.js';

class App extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <Route path = "/" exact render = {Home} />
                </div>
            </Router>
        )
    }
}

export default App;