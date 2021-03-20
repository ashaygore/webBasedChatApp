import React from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App'

import {Chat} from './components'

const Start = () => (
    <Router>
        <Route path='/' exact component={App} />
        <Route path='/chat' component={Chat} />
    </Router>
)

export default Start;