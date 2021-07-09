
import React from 'react';
import "./Navbar.css";
import Contacto from './components/Contacto';
import Navbar from "./components/Navbar";
import { Cursos } from './components/Cursos';
import { Tecnologias } from './components/Tecnologias';
import SignIn from "./components/SignIn"
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
      </Switch>
    </Router>
    <Router>
      <Switch>
        <Route path="/Registrate">
          <SignIn />
        </Route>
      </Switch>
    </Router>
    <Router>
      <Switch>
        <Route path="/Profesores">
          <Profesores />
        </Route>
      </Switch>
    </Router>
    <Router>
      <Switch>
        <Route path="/Tecnologias">
          <Tecnologias />
        </Route>
      </Switch>
    </Router>
    <Router>
      <Switch>
        <Route path="/Contacto">
          <Contacto />
        </Route>
      </Switch>
    </Router>






  </div>
}
export default App;