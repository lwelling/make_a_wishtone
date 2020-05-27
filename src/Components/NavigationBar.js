import React from "react";
import { Navbar, Nav } from "react-bootstrap";

import logo from "./assets/wishtone-text-01.png";
import { UserContext } from "./providers/UserProvider";

export default function NavigationBar({ user }) {
  return (
    <UserContext.Consumer>
      {(user) =>
        user ? (
          <>
            <Navbar variant="light" expand="lg">
              <Navbar.Brand href="/">
                <img style={{ height: "50px" }} src={logo} alt="logo" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                  <Nav.Link href="/wishingwell">Wishing Well</Nav.Link>
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
