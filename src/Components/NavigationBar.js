import React from "react";
import { Navbar, Nav } from "react-bootstrap";

import logo from "./assets/wishtone-text-01.png";
import { UserContext } from "./providers/UserProvider";
import firebase from "../firebase";

export default function NavigationBar() {
  const signOut = () => {
    firebase.auth().signOut();
  };

  return (
    <UserContext.Consumer>
      {(user) =>
        user.userObj && user.isLoading === false ? (
          <>
            <Navbar variant="light" expand="lg">
              <Navbar.Brand href="/">
                <img style={{ height: "50px" }} src={logo} alt="logo" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Navbar.Text>Hello, {user.userObj.displayName}</Navbar.Text>
                  <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                  <Nav.Link href="/postboard">Postboard</Nav.Link>
                  <Nav.Link onClick={signOut}>Sign out</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </>
        ) : (
          <>
            <Navbar variant="light" expand="lg">
              <Navbar.Brand href="/">
                <img style={{ height: "50px" }} src={logo} alt="logo" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/signin">Sign in</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </>
        )
      }
    </UserContext.Consumer>
  );
}
