import React, { createContext, useState, useEffect } from "react";
import firebase from "../../firebase";

export const UserContext = createContext();

const UserProvider = (props) => {
  const [user, setUser] = useState(null);
  const { children } = props;

  useEffect(() => {
    async function authListener() {
      let unsubscribeFromAuthListener = firebase
        .auth()
        .onAuthStateChanged((userObj) => {
          setUser(userObj);
        });
      return () => {
        unsubscribeFromAuthListener();
      };
    }
    authListener();
  }, []);

  return (
    <UserContext.Provider value={user}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
