import React, { useState } from 'react';
import '../Navbar.css';
import Reorder from '@material-ui/icons/Reorder';
import { Button } from '@material-ui/core';

function Navbar() {


  const [showLinks, setShowLinks] = useState(false);
  return (<div className="Navbar">
    <div className="leftSide">
      <div className="links" id={showLinks ? "hidden" : " "}>
        <Button ><a href="Cursos">Cursos</a></Button>
        <Button><a href="Registrate" >Registrate</a></Button>
        <Button><a href="Profesores">Profesores</a></Button>
        <Button><a href="Tecnologias">Tecnologias</a></Button>
      </div>
      <Button color="primary" onClick={() => setShowLinks(!showLinks)}>
        {" "}
        <Reorder />
      </Button>
    </div>
    <div className="rightSide">
      <Button  ><a href="Registrate">Registrate</a></Button>
      <Button  ><a href="Cursos">Cursos</a></Button>
      <Button  ><a href="Contacto">Contacto</a></Button>
      <div className="acceso">
        <Button ><a href="Registrarse" >Ingresar</a></Button>
      </div>
    </div>

  </div>
  );
}

export default Navbar
