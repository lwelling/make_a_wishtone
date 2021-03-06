import React from "react";
import { Card } from "react-bootstrap";

import anonIcon from "./assets/anon-icon-01.png";

const CurrentUser = ({ user }) => {
  const { displayName, photoURL, email } = user;
  return (
    <div className="user-container">
      <Card>
        <Card>
          <Card.Img
            alt={displayName}
            src={photoURL ? photoURL : anonIcon}
            style={{ borderRadius: "50%", maxHeight: "20vh", maxWidth: "20vw" }}
          />
        </Card>
        <Card>
          <Card.Body className="center-text">
            <Card.Title>{displayName}</Card.Title>
            <Card.Text>{email}</Card.Text>
          </Card.Body>
          <Card.Body className="center-text">
            <Card.Link href="/postboard">Postboard</Card.Link>
            <Card.Link href="/upload">Upload Wish</Card.Link>
          </Card.Body>
        </Card>
      </Card>
    </div>
  );
};

export default CurrentUser;
