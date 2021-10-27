import React from 'react';
import ReatcDOM from 'react-dom';
import '../src/styles/global.scss';
import Home from './view/Home';

const App = () => {
    return(
        <Home />
    )
}

ReatcDOM.render(<App />, document.getElementById('root'));