import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ postList, user, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        user ? (
          <Component {...props} user={user} postList={postList} />
        ) : (
          <Redirect
            to={{ pathname: "/signin", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
