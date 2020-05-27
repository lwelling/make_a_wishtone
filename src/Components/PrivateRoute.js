import React from "react";
import { Route, Redirect } from "react-router-dom";

import { UserContext } from "./providers/UserProvider";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <UserContext.Consumer>
      {(user) => (
        <Route
          {...rest}
          render={(props) =>
            user ? (
              <Component user={user} {...props} />
            ) : (
              <Redirect
                to={{ pathname: "/signin", state: { from: props.location } }}
              />
            )
          }
        />
      )}
    </UserContext.Consumer>
  );
};

export default PrivateRoute;
