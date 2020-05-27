import React from "react";
import { Redirect } from "react-router-dom";

import Hero from "./Hero";
import Definition from "./Definition";
import CallToAction from "./CallToAction";

const Home = (props) => {
  return props.user ? (
    <Redirect
      to={{ pathname: "/dashboard", state: { from: props.location } }}
    />
  ) : (
    <>
      <Hero />
      <Definition />
      <CallToAction />
    </>
  );
};

export default Home;
