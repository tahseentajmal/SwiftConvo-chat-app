import React from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom';

import Join from './components/Join';
import Chat from './components/Chat';

const App = () => (
    <Router>
        <Route path='/' exact Component={Join}></Route>
        <Route path='/chat' Component={Chat}></Route>
    </Router>
)

export default App;