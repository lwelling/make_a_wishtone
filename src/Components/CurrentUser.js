  
import React from 'react';
import firebase from '../firebase';

const CurrentUser = ({user}) => {
  const { displayName, photoURL, email, children } = user
  return (
    <section className="CurrentUser">
      <div className="CurrentUser--profile">
        {photoURL && <img src={photoURL} alt={displayName} />}
        <div className="CurrentUser--information">
          <h2>{displayName}</h2>
          <p className="email">{email}</p>
        </div>
      </div>
      <div>
        <div>{children}</div>
        <button onClick={() => firebase.auth().signOut()}>Sign Out</button>
      </div>
    </section>
  );
};

export default CurrentUser;