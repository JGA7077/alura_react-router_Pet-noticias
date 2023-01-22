import React, { useState, useEffect } from "react";
import { useParams, useHistory } from 'react-router-dom';
// import { busca } from "../api/api";
import "../assets/css/post.css";
import listaPosts from "../api/posts";

const Post = () => {
  let history = useHistory()
  const {id} = useParams()
  const [post, setPost] = useState({});

  useEffect(() => {
    // busca do post por ID
    // busca(`/posts/${id}`, setPost)
    // .catch(() => {
    //   history.push('/404')
    // })

    const getPost = listaPosts.find(post => post.id === Number(id))
    setPost(getPost)
  }, [id, history]);
  
  return (
    <main className="container flex flex--centro">
      <article className="cartao post">
        <h2 className="cartao__titulo">{post.title}</h2>
        <p className="cartao__texto">{post.body}</p>
      </article>
    </main>
  );
};

export default Post;
