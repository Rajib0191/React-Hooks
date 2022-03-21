import React, { useEffect, useState } from "react";
import { useFetchApi } from "./useFetchApi";

const Post = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const { data: posts, loding } = useFetchApi(url, []);
  return (
    <div>
      {loding && <p>Loading......</p>}
      {posts.map((post) => (
        <ul key={post.id}>
          <li>{post.title}</li>
        </ul>
      ))}
    </div>
  );
};

export default Post;
