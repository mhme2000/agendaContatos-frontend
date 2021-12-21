import React from "react";
import { Router, Route } from "react-router-dom";
import Listagem from "./pages/Listagem/index";
import Home from "./pages/Home/index";

const Routes = () => {
    return (
        <Router>
                <Route path="/">
                    <Home />
                </Route>
                <Route path="/listagem">
                    <Listagem />
                </Route>
      </Router>
    );
}

export default Routes;