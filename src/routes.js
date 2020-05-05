import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home2";
import Login from "./pages/Login/index";
import SignUp from "./pages/SignUp/index";
import NotFound from "./components/NotFound/index";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route component={Login} path="/" exact />
        <Route component={Home} path="/home" exact />
        <Route component={SignUp} path="/signup" exact />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
