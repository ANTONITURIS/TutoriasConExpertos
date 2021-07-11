
import React from 'react';
import "./Navbar.css";
import Contacto from './components/Contacto';
import Navbar from "./components/Navbar";
import Cursos from './components/Cursos';
import { Tecnologias } from './components/Tecnologias';
import Registrarse from "./components/Registrarse";
import SignIn from "./components/SignIn";
import { Profesores } from './components/Profesores';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom"
function App() {
  return <div className="app">
    <Navbar />
    <Router>
      <Switch>
        <Route path="/Cursos">
          <Cursos />
        </Route>
        <Route path="/Registrate">
          <Registrarse />
        </Route>
        <Route path="/Profesores">
          <Profesores />
        </Route>
        <Route path="/Tecnologias">
          <Tecnologias />
        </Route>
        <Route path="/Contacto">
          <Contacto />
        </Route>
        <Route exact path="/Registrarse">
          <SignIn />
        </Route>
      </Switch>
    </Router>
  </div>
}
export default App;

