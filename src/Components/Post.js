import React from "react";
import moment from "moment";
import { Button, Card } from "react-bootstrap";

import { firestore } from "../firebase";

const Post = ({ title, content, user, createdAt, stars, id }) => {
  console.log(moment(createdAt.toDateString));
  const postRef = firestore.doc(`posts/${id}`);
  const remove = () => postRef.delete();

  const starUp = () => postRef.update({ stars: stars + 1 });
  const starDown = () => postRef.update({ stars: stars - 1 });

  return (
    <Card className="text-center">
      <Card.Header>{moment(createdAt.toDateString).calendar()}</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {content}
          <p>
            {stars >= 0 ? (
              <span role="img" aria-label="star">
                🔥
              </span>
            ) : (
              <span role="img" aria-label="splat">
                💩
              </span>
            )}
            {stars}
          </p>
        </Card.Text>
        <Button variant="danger" className="star" onClick={starDown}>
          Downvote{" "}
        </Button>
        <Button className="star" onClick={starUp}>
          Upvote{" "}
        </Button>
        <Button variant="outline-danger" className="delete" onClick={remove}>
          Delete
        </Button>
      </Card.Body>
      <Card.Footer className="text-muted">
        Posted by {user.displayName}
      </Card.Footer>
    </Card>
  );
};

export default Post;
