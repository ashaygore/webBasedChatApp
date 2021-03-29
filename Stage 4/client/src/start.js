import React from 'react'

import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import App from './App'

import { Chat } from './components'

const Start = () => {

    return (
        <Router>
            <Route path='/' exact component={App} />
            
            <PrivateRoute component={Chat} exact path="/chat" />

        </Router>
    )
}


const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={props => (
            (localStorage.getItem('bool') === 'true') ?
                <Component {...props} />
                : <Redirect to="/" />
        )} />
    );
};

export default Start;