import React, { useState, useEffect } from "react";
import { Switch } from "react-router-dom";
import { Route, useParams, useRouteMatch, Link } from "react-router-dom";
import { busca } from "../api/api";
import "../assets/css/blog.css";
import ListaCategorias from "../components/ListaCategorias";
import ListaPost from "../components/ListaPost";
import SubCategoria from "./SubCategoria";
import categorias from "../api/categories";

const Categoria = () => {
  const { id } = useParams();
  const { url, path } = useRouteMatch();
  const [subcategorias, setSubCategorias] = useState([]);
  useEffect(() => {
    // busca por subcategorias
    // busca(`/categorias/${id}`, (categoria) => {
    //   setSubCategorias(categoria.subcategorias);
    // });
    const getCategory = categorias.find(category => category.id === id)
    setSubCategorias(getCategory.subcategorias)
  }, [id]);
  return (
    <>
      <div className="container">
        <h2 className="titulo-pagina">Pet Notícias</h2>
      </div>

      <ListaCategorias />
      <ul className="lista-categorias container flex">
        {subcategorias.map((subcategoria) => (
          <li className={`lista-categorias__categoria lista-categorias__categoria--${id}`} key={subcategoria}>
            <Link to={`${url}/${subcategoria}`}>{subcategoria}</Link>
          </li>
        ))}
      </ul>
      <Switch>
        <Route exact path={`${path}/`}>
          <ListaPost url={`/posts?categoria=${id}`} postsParaListar={'categoria'} />
        </Route>
        <Route path={`${path}/:subcategoria`}>
          <SubCategoria />
        </Route>
      </Switch>
    </>
  );
};

export default Categoria;
