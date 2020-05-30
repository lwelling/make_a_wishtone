import React from "react";

import CurrentUser from "./CurrentUser";

const Dashboard = ({ user }) => {
  return (
    <div>
      <CurrentUser user={user} />
    </div>
  );
};

export default Dashboard;
