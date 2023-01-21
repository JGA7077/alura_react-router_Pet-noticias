import React from 'react'
import ListaPost from '../components/ListaPost'
import ListaCategorias from '../components/ListaCategorias'

const Home = () => {

  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">Pet notícias</h2>
      </div>
      <ListaCategorias />
      <ListaPost postsParaListar={'todos'} />

    </main>
  )
}

export default Home
