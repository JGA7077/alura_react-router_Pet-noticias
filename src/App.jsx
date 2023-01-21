import React from "react";
import "./assets/css/base/base.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./paginas/Home";
import Sobre from "./paginas/Sobre";
import Pagina404 from "./paginas/Pagina404";
import Cabecalho from "./components/Cabecalho";
import Post from "./paginas/Post";
import Categoria from "./paginas/Categoria";

function App() {
  return (
    <Router>
      <Cabecalho />
      <Switch>
        <Route exact path="alura_react-router_Pet-noticias/">
          <Home />
        </Route>
        <Route path="alura_react-router_Pet-noticias/sobre">
          <Sobre />
        </Route>
        <Route path="alura_react-router_Pet-noticias/categoria/:id">
          <Categoria />
        </Route>
        <Route path="alura_react-router_Pet-noticias/posts/:id">
          <Post />
        </Route>
        <Route>
          <Pagina404 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
