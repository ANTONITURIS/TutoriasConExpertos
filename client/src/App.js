
import React from 'react';
import "./Navbar.css";
import Cursos from './components/Cursos';
import Paginaprincipal from './components/Paginaprincipal';
import { Profesores } from './components/Profesores';
import { Estudiantes } from './components/Estudiantes';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom"
import Registrarse from './components/Registrarse'
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
        <Route exact path="/Profesores">
          <Profesores />
        </Route>
        <Route exact path="/Estudiantes">
          <Estudiantes />
        </Route>
        <Route exact path="/Tecnologias">
          <Cursos />
        </Route>
        <Route exact path="/Registrate">
          <Paginaprincipal />
        </Route>
        <Route exact path="/Registrarse">
          <Registrarse />
        </Route>
        <Route exact path="/Paginaprincipal">
          <Paginaprincipal />
        </Route>
      </Switch>
    </Router>
  </div>

}
export default App;

