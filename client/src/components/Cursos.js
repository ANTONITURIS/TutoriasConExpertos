import React from 'react';
import '../Cursos.css';
import Cardcursos from './Materials/Cardcursoshtml';
import Cardcursosjs from './Materials/Cardcursosjs';
import Cardcursosnode from './Materials/Cardcursosnode';
import Cardcursossql from './Materials/Cardcursossql'
import desktopImage from '../components/Assets/Img/pc.jpg';

import mobileImage from '../components/Assets/Img/bigsmall.jpg';
import { Box, Grid, } from '@material-ui/core';
import Navbar from './Navbar';




const Cursos = () => {
  const imageUrl = window.innerWidth >= 650 ? desktopImage : mobileImage;

  return (
    <>
      <Navbar />
      <div className="App" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="App-content">
          <h2>Docendo Discimus</h2>
        </div>
      </div>
      <Grid container>
        <Grid item xs={12} sm={12} md={12}>
          <Box borderRadius={15} borderColor={'grey.500'} textAlign={'left'} fontSize={26} m={1} border={2} >Aspira a más,
            aprender te mantiene a la vanguardia, consigue
            las habilidades más demandadas para impresionar a cualquiera.</Box>
        </Grid>


        <Grid item xs={12} sm={6} md={3}>

          <Box m={1}  >
            <Cardcursos />
          </Box>
        </Grid >
        <Grid item xs={12} sm={6} md={3} >
          <Box m={1}>
            <Cardcursosjs />
          </Box>
        </Grid >
        <Grid item xs={12} sm={6} md={3}>
          <Box m={1} >
            <Cardcursosnode />
          </Box>
        </Grid >
        <Grid item xs={12} sm={6} md={3}>
          <Box m={1} >
            <Cardcursossql />
          </Box>
        </Grid >



      </Grid>

    </>

  );
};

export default Cursos;