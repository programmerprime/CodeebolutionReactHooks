import React, { useState, useEffect } from "react";
import axios from "axios";

const CustomHookPractice = () => {
  const [post, setPost] = useState({});
  const [id, setId] = useState("1");
  const [idFromButtonClick, setIdFromButtonClick] = useState("1");

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [idFromButtonClick]);

  const handleClick = () => {
    setIdFromButtonClick(id);
  };

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={handleClick}>Fetch Post</button>
      <h1 style={{ color: "red" }}> {post.title ? post.title : null} </h1>
      <p> {post.body ? post.body : null} </p>
    </div>
  );
};

export default CustomHookPractice;
