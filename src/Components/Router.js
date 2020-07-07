import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";

export default () => (
    <Router>
        <>
            <Route path="/" axact component={Home}/>
            <Route path="/tv" axact component={TV}/>
            <Route path="/search" axact component={Search}/>
        </>
    </Router>
)