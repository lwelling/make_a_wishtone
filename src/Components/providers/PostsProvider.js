import React, { createContext, useState, useEffect } from "react";

import { firestore } from "../../firebase";
import { collectIdsAndDocs } from "../utilities";

export const PostsContext = createContext();

const PostsProvider = (props) => {
  const [postList, setPostList] = useState("");
  const { children } = props;

  useEffect(() => {
    async function onSnapShotListener() {
      let unsubscribeFromOnSnapShotListener = firestore
        .collection("posts")
        .onSnapshot((snapshot) => {
          const posts = snapshot.docs.map(collectIdsAndDocs);
          setPostList(posts);
        });
      return () => {
        unsubscribeFromOnSnapShotListener();
      };
    }
    onSnapShotListener();
  }, []);

  return (
    <PostsContext.Provider value={postList}>{children}</PostsContext.Provider>
  );
};

export default PostsProvider;
