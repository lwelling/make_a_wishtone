import React from "react";

import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { Redirect } from "react-router-dom";

const SignInAndSignUp = ({ user }) => {
  return user ? (
    <Redirect to="/dashboard" />
  ) : (
    <div>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUp;
