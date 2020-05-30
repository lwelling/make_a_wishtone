import React, { useState } from "react";

import { firestore } from "../firebase";

const AddPost = ({ user }) => {
  const [postContent, setPostContent] = useState({ title: "", content: "" });
  const { uid, displayName, email, photoURL } = user;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPostContent((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const { title, content } = postContent;

  const handleSubmit = (event) => {
    event.preventDefault();

    const title = postContent.title;
    const content = postContent.content;

    const post = {
      id: Date.now().toString(),
      title,
      content,
      stars: 0,
      user: {
        uid,
        displayName,
        email,
        photoURL,
      },
      favorites: 0,
      comments: 0,
      createdAt: new Date(),
    };

    firestore.collection("posts").doc(post.id).set(post);

    setPostContent({ title: "", content: "" });
  };

  return (
    <form className="AddPost" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={title}
        onChange={handleChange}
      />
      <input
        type="text"
        name="content"
        placeholder="Body"
        value={content}
        onChange={handleChange}
      />
      <input className="create" type="submit" value="Create Post" />
    </form>
  );
};

export default AddPost;
