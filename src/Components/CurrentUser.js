import React from "react";

const CurrentUser = ({ user }) => {
  const { displayName, photoURL, email } = user;
  return (
    <div>
      {photoURL && (
        <img
          style={{ borderRadius: "50%", height: "7rem", width: "auto" }}
          src={photoURL}
          alt={displayName}
        />
      )}
      <div>
        <h2>{displayName}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default CurrentUser;
