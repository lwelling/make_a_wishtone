import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const CurrentUser = ({ user }) => {
  const { displayName, photoURL, email } = user;
  return (
    <div className="user-container">
      <Card>
        <Card>
          <Card.Img
            variant="top"
            alt={displayName}
            src={photoURL}
            style={{ borderRadius: "50%", height: "25vh", width: "auto"}}
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
