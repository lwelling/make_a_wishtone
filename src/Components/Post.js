import React from "react";
import moment from "moment";

import { firestore } from "../firebase";

const Post = ({ title, content, user, createdAt, stars, id }) => {
  console.log(moment(createdAt.toDateString));
  const postRef = firestore.doc(`posts/${id}`);
  const remove = () => postRef.delete();

  const starUp = () => postRef.update({ stars: stars + 1 });
  const starDown = () => postRef.update({ stars: stars - 1 });

  return (
    <article className="Post">
      <div className="Post--content">
        <h3>{title}</h3>
        <div>{content}</div>
      </div>
      <div className="Post--meta">
        <div>
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
          <p>Posted by {user.displayName}</p>
          <p>{moment(createdAt.toDateString).calendar()}</p>
        </div>
        <div>
          <button className="star" onClick={starUp}>
            Upvote{" "}
          </button>
          <button className="star" onClick={starDown}>
            Downvote{" "}
          </button>
          <button className="delete" onClick={remove}>
            Delete
          </button>
        </div>
      </div>
    </article>
  );
};

export default Post;
