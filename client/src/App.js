
import React from 'react';
import "./Navbar.css";
import Cursos from './components/Cursos';
import Paginaprincipal from './components/Paginaprincipal';

import { Usuario } from './components/Usuario';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom"
import Login from './components/Login'
function App() {

  return <div className="app">

    <Router>
      <Switch>
        <Route exact path="/">
          <Paginaprincipal />
        </Route>
        <Route exact path="/Cursos">
          <Cursos />
        </Route>
        <Route exact path="/Usuario">
          <Usuario />
        </Route>
        <Route exact path="/Tecnologias">
          <Cursos />
        </Route>
        <Route exact path="/Registrate">
          <Paginaprincipal />
        </Route>
        <Route exact path="/Login">
          <Login />
        </Route>
        <Route exact path="/Paginaprincipal">
          <Paginaprincipal />
        </Route>
      </Switch>
    </Router>
  </div>

}
export default App;

