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
      </div>
      <Button color="secondary" onClick={() => setShowLinks(!showLinks)}>
        {" "}
        <Reorder />
      </Button>
      <div className="acceso">
        <Button ><a href="Login" >login</a></Button>
      </div>
    </div>
    <div className="rightSide">
      <Button  ><a href="Cursos">Cursos</a></Button>
      <Button ><a href="Login" >Ingresar</a></Button>
      <Button ><a href="Paginaprincipal" >home</a></Button>
    </div>





  </div>

  );
}

;

export default Navbar
