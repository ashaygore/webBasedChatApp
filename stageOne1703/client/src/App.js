import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';

import Join from './components/join';
import Chat from './components/chat';

const App = () => {
    return (
    <Router>
        <Route path="/" exact component={Join} /> 
        <Route path="/chat" component={Chat} /> 
    </Router>
    )

    //for line join route => for user joining a chat app
    //for line chat route => after joining a chat app from join ato show our chat window
}

export default App;