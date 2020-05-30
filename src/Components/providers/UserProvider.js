import React, { createContext, useState, useEffect } from "react";
import firebase from "../../firebase";

export const UserContext = createContext();

const UserProvider = (props) => {
  const [user, setUser] = useState({
    userObj: null,
    isLoading: true,
  });
  const { children } = props;

  useEffect(() => {
    let unsubscribeFromAuthListener = async () => {
      firebase.auth().onAuthStateChanged((userObj) => {
        setUser({
          userObj: userObj,
          isLoading: !user.isLoading,
        });
      });
    };
    unsubscribeFromAuthListener();
    return () => {
      unsubscribeFromAuthListener();
    };
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserProvider;
