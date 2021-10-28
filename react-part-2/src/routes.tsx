import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import  Form from './view/Form';
import { Home } from './view/Home';
import RickAndMorty from './view/RickAndMorty';
import { Nav } from './components/Nav';
import Todo from './view/Todo';

export const Routes: React.FC = () => {
    return(
        <BrowserRouter>
            <Nav />
            <Switch>
                <Route exact path="/" component={ Home } />
                <Route path="/rm" component={ RickAndMorty } />
                <Route path="/form" component={ Form } />
                <Route path="/todo" component={ Todo } />
            </Switch>
        </BrowserRouter>
    )
}