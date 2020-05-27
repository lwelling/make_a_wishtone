
import React from 'react';

import CurrentUser from './CurrentUser';
import SignInAndSignUp from './SignInAndSignUp';

const Authentication = ({ user, loading }) => {
  console.log(user)
  if (loading) return null;

  return <div>{user ? <CurrentUser user={user} /> : <SignInAndSignUp />}</div>;
};

export default Authentication;
