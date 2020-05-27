import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Dashboard from "./Components/Dashboard";
import Home from "./Components/Home";
import Postboard from "./Components/Postboard";
import NavigationBar from "./Components/NavigationBar";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        {/* Each component is checking Auth from context. TODO: eliminate flicker. */}
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/wishingwell">
          <Postboard />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
