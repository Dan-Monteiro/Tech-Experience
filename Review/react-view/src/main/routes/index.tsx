import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '@/main/pages/Home';

const Routes: React.FC = () => {

   console.log("router")
  return (
     <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ Home } />
        </Switch>
     </BrowserRouter> 
  );
}

export default Routes;