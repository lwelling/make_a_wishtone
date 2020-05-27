import React from "react";
import Post from "./Post";
import AddPost from "./AddPost";

const Posts = ({ postList }) => {
  const posts = postList.posts;
  return (
    <>
      <AddPost />
      <section className="Posts">
        {posts ? (
          posts.map((post) => <Post {...post} key={post.id} />)
        ) : (
          <p>Nothing to see here ...</p>
        )}
      </section>
    </>
  );
};
export default Posts;
