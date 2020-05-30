import React from "react";

import Post from "./Post";
import AddPost from "./AddPost";
import { PostsContext } from "./providers/PostsProvider";

const Postboard = ({ user, isLoading }) => {
  return (
    <>
      <AddPost isLoading={isLoading} user={user} />
      <section className="Posts">
        <PostsContext.Consumer>
          {(posts) =>
            posts ? (
              posts.map((post) => <Post {...post} key={post.id} />)
            ) : (
              <p>Nothing to see here ...</p>
            )
          }
        </PostsContext.Consumer>
      </section>
    </>
  );
};
export default Postboard;
