import React from "react";

import { UserContext } from "./providers/UserProvider";
import { Redirect } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const Authentication = ({ component: Component, location }) => {
  return (
    <UserContext.Consumer>
      {(user) =>
        user.isLoading ? <Spinner style={{ minHeight: "7vh", minWidth: "7vw" }} size="lg" variant="primary" animation="border" /> : (
          <>
            {user.userObj ? (
              <Component isLoading={user.isLoading} user={user.userObj} />
            ) : (
              <Redirect
                to={{ pathname: "/signin", state: { from: location } }}
              />
            )}
          </>
        )
      }
    </UserContext.Consumer>
  );
};

export default Authentication;
