import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Error from "./Error";
import Form from "./Form";
import Hello from "./Hello";

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/hello" component={Hello} />
                <Route path="/form" component={Form} />
                <Route path="*" component={Error} />
            </Switch>
        </BrowserRouter>
    )
}


export default Routes;