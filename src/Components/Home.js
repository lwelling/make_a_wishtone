import React from "react";
import { Redirect } from "react-router-dom";

import Hero from "./Hero";
import Definition from "./Definition";
import CallToAction from "./CallToAction";
import { UserContext } from "./providers/UserProvider";

const Home = (props) => {
  return (
    <UserContext.Consumer>
      {(user) =>
        user ? (
          <Redirect
            to={{ pathname: "/dashboard", state: { from: props.location } }}
          />
        ) : (
          <>
            <Hero />
            <Definition />
            <CallToAction />
          </>
        )
      }
    </UserContext.Consumer>
  );
};

export default Home;
