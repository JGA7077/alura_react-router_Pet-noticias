import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
// import {busca} from "../api/api"
import listaPosts from '../api/posts';

const ListaPost = ({url, postsParaListar}) => {
 
  const [posts, setPosts] = useState([])
  useEffect(() => {
    // buscando posts no servidor
    // busca(url, setPosts)

    switch (postsParaListar) {
      case 'todos':
        setPosts(listaPosts)
        break;
      case 'categoria':
        const getPostsFromCategory = listaPosts.filter(post => post.urlcategoria === url)
        setPosts(getPostsFromCategory);
        break
      case 'subcategoria':
        const getPostsFromSubCategory = listaPosts.filter(post => post.urlsubcategoria === url)
        setPosts(getPostsFromSubCategory);
        break
      default:
        break;
    }
  }, [url]);
  
  return(
    <section className="posts container">
      {
        posts.map((post) => {
          return(
            <Link key={post.id} className={`cartao-post cartao-post--${post.categoria}`} to={`/posts/${post.id}`}>
            <article>
              <h3 className="cartao-post__titulo">{post.title}</h3>
              <p className="cartao-post__meta">{post.metadescription}</p>
            </article>
          </Link>
          )
        })
      }
    </section>
  )
}

export default ListaPost