import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/NavBar.js';
import Home from './components/Home.js';

class App extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <NavBar/>
                    <Route path = "/" exact component = {Home} />
                </div>
            </Router>
        )
    }
}

export default App;