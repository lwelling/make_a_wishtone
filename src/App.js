import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Dashboard from "./Components/Dashboard";
import Home from "./Components/Home";
import Postboard from "./Components/Postboard";
import NavigationBar from "./Components/NavigationBar";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Authentication from "./Components/Authentication";
import Upload from "./Components/Upload";

function App() {
  return (
    <Router>
      <Authentication component={NavigationBar} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Authentication component={Postboard} exact path="/postboard" />
        <Authentication component={Dashboard} exact path="/dashboard" />
        <Authentication component={Upload} exact path="/upload" />
      </Switch>
    </Router>
  );
}

export default App;
