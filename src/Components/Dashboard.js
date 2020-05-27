import React from "react";
import { Redirect } from "react-router-dom";

import CurrentUser from "./CurrentUser";
import { UserContext } from "./providers/UserProvider";

const Dashboard = () => {
  return (
    <UserContext.Consumer>
      {(user) => 
        user ? (
          <CurrentUser user={user} /> 
        ) : (
          <Redirect to="/signin" />
        )}
    </UserContext.Consumer>
  );
};

export default Dashboard;
