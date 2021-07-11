import React from 'react';
import '../Cursos.css'
import desktopImage from '../Assets/Img/big.jpg';
import mobileImage from '../Assets/Img/small.jpg';
import Cabeza from './Cabeza'



const Cursos = () => {
  const imageUrl = window.innerWidth >= 650 ? desktopImage : mobileImage;

  return (
    <div className="App" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="App-content">
        <h1>Docendo Discimus</h1>
      </div>
      <Cabeza />
    </div>
  );
};

export default Cursos;