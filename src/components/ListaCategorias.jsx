import { clearConfigCache } from 'prettier';
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
// import {busca} from '../api/api'
import listaCategorias from '../api/categories';
import '../assets/css/blog.css'

const ListaCategorias = () => {
  const [categorias, setCategorias] = useState([])
  useEffect(() => {
    // buscando categorias no servidor
    // busca(`/categorias`, setCategorias);

    setCategorias(listaCategorias)
  }, []);

  return(
    <ul className="lista-categorias container flex">
      {
        categorias.map((categoria) => {
          return(
            <Link key={`${categoria.nome}-li`} to={`/categoria/${categoria.id}`}>
              <li className={`lista-categorias__categoria lista-categorias__categoria--${categoria.id}`}>
                {categoria.nome}
              </li>
            </Link>
          )
        })
      }
    </ul>
  )
}

export default ListaCategorias