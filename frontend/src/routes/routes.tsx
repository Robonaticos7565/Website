import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Competitions from '../pages/Competitions';
import Projects from '../pages/Projects';
import UnderConstruction from '../pages/UnderConstruction';
import NotFound from '../pages/NotFound';

import WhiteBoard from '../pages/WhiteBoard';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/projects' component={Projects} />
                <Route path='/about' component={About} />
                <Route path='/competition' component={Competitions} />
                <Route path='/board' component={WhiteBoard}/>
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}