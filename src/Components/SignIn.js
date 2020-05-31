import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Redirect } from "react-router-dom";

import {
  signInWithGoogle,
  signInWithTwitter,
  signInWithFacebook,
} from "../firebase";
import { UserContext } from "./providers/UserProvider";

const SignIn = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const { email, password } = credentials;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setCredentials((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setCredentials({ email: "", password: "" });
  };

  return (
    <UserContext.Consumer>
      {(user) =>
        user.userObj && user.isLoading === false ? (
          <Redirect to="/dashboard" />
        ) : (
          <Form className="signInForm" onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={email}
                name="email"
                type="email"
                placeholder="you@email.com"
                autoComplete="true"
              />
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={password}
                name="password"
                type="password"
                placeholder="p@$$w0rd"
                autoComplete="true"
              />
              <Button
                style={{ marginTop: "1%", width: "100%" }}
                variant="outline-primary"
                type="submit"
                value="Sign In"
              >
                Sign in
              </Button>
              <Button
                style={{ marginTop: "5%", width: "100%" }}
                variant="primary"
                onClick={signInWithFacebook}
              >
                Sign in with Facebook
              </Button>
              <Button
                style={{ marginTop: "1%", width: "100%" }}
                variant="success"
                onClick={signInWithGoogle}
              >
                Sign in with Google
              </Button>
              <Button
                style={{ marginTop: "1%", width: "100%" }}
                variant="secondary"
                onClick={signInWithTwitter}
              >
                Sign in with Twitter
              </Button>
              <Button
                style={{ marginTop: "5%", width: "100%" }}
                variant="outline-dark"
                href="/signup"
              >
                No account? Sign Up!
              </Button>
            </Form.Group>
          </Form>
        )
      }
    </UserContext.Consumer>
  );
};

export default SignIn;
