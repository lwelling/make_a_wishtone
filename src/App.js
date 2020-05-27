import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import firebase from "./firebase";

import Dashboard from "./Components/Dashboard";
import Home from "./Components/Home";
import PrivateRoute from "./Components/PrivateRoute";
import { collectIdsAndDocs } from "./Components/utilities";
import { firestore } from "./firebase";
import "./App.css";
import SignInAndSignUp from "./Components/SignInAndSignUp";
import Postboard from "./Components/Postboard";
import NavigationBar from "./Components/NavigationBar";

function App() {
  const [user, setUser] = useState(null);
  const [postList, setPostList] = useState("");

  useEffect(() => {
    async function onSnapShotListener() {
      let unsubscribeFromOnSnapShotListener = firestore
        .collection("posts")
        .onSnapshot((snapshot) => {
          const posts = snapshot.docs.map(collectIdsAndDocs);
          setPostList({ posts });
        });
      return () => {
        unsubscribeFromOnSnapShotListener();
      };
    }
    onSnapShotListener();
  }, []);

  useEffect(() => {
    async function authListener() {
      let unsubscribeFromAuthListener = firebase
        .auth()
        .onAuthStateChanged((userObj) => {
          setUser(userObj);
        });
      return () => {
        unsubscribeFromAuthListener();
      };
    }
    authListener();
  }, []);

  return (
    <Router>
      <NavigationBar user={user} />
      <Switch>
        <Route exact path="/">
          <Home user={user} />
        </Route>
        <Route exact path="/signin">
          <SignInAndSignUp user={user} />
        </Route>
        <Route exact path="/wishingwell">
          <Postboard user={user} postList={postList} />
        </Route>
        {/* TODO: make it so that this does not fail upon refresh and reroute logged-in screens to PrivateRoute failure route */}
        <PrivateRoute
          path="/dashboard"
          component={Dashboard}
          user={user}
          postList={postList}
        />
      </Switch>
    </Router>
  );
}

export default App;
