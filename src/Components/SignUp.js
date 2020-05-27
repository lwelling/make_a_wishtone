import React, { useState} from "react";
import { Button, Form } from "react-bootstrap";

import { signInWithGoogle } from "../firebase";
import { Redirect } from "react-router-dom";
import { UserContext } from "./providers/UserProvider";

const SignUp = () => {
  const [credentials, setCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
  });

  const { displayName, email, password } = credentials;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setCredentials((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setCredentials({ displayName: "", email: "", password: "" });
  };

  return (
    <UserContext.Consumer>
      {(user) =>
        user ? (
          <Redirect to="/dashboard" />
        ) : (
          <Form className="signInForm" onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Display Name</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={displayName}
                name="displayName"
                type="displayName"
                placeholder="Display Name"
                autoComplete="true"
              />
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
                variant="primary"
                type="submit"
                value="Sign Up"
              >
                Sign up
              </Button>
              <Button
                style={{ marginTop: "1%", width: "100%" }}
                variant="success"
                onClick={signInWithGoogle}
              >
                Sign up with Google
              </Button>
            </Form.Group>
          </Form>
        )
      }
    </UserContext.Consumer>
  );
};

export default SignUp;
