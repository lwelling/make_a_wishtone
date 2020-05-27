import React from "react";

import CurrentUser from "./CurrentUser";

const Dashboard = (user) => {
  return (
    <>
      <h1>This is your dashboard</h1>
      <CurrentUser user={user.user} />
    </>
  );
};

export default Dashboard;
