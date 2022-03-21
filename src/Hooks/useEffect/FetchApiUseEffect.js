import React, { useEffect, useState } from "react";

const FetchApiUseEffect = () => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [singleId, setSingleId] = useState(1);

  const handleClick = () => {
    setSingleId(id);
  };

  const url = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPosts(data));
    /*=============================For The Single Data Fetch=====================*/
    fetch(`https://jsonplaceholder.typicode.com/posts/${singleId}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [singleId]);
  return (
    <div>
      <div>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        <button onClick={handleClick}>fetch data</button>
        <div className="single_data">
          <p>{post.title}</p>
        </div>
      </div>
      <div className="">
        <ul>
          {posts.map((post) => {
            return <li key={post.id}>{post.title}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default FetchApiUseEffect;
