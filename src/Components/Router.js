import React from "react";
import { BrowserRouter as Router, Route, Redirect , Switch} from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";

export default () => (
    <Router>
        <Switch>
            <Route path="/" axact component={Home} />
            <Route path="/tv" axact component={TV} />
            <Route path="/tv/popular" render = { () => <h1>Popular</h1> } />
            <Route path="/search" component={Search} /> 
            <Redirect from="*" to="/" />
        </Switch>
    </Router>
)