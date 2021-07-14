import React from 'react';
import '../Cursos.css';
import Cardcursos from './Materials/Cardcursoshtml';
import Cardcursosjs from './Materials/Cardcursosjs';
import Cardcursosnode from './Materials/Cardcursosnode';
import Cardcursossql from './Materials/Cardcursossql'
import desktopImage from '../components/Assets/Img/pc.jpg';

import mobileImage from '../components/Assets/Img/bigsmall.jpg';
import { Box, Grid, } from '@material-ui/core';




const Cursos = () => {
  const imageUrl = window.innerWidth >= 650 ? desktopImage : mobileImage;

  return (
    <>
      <div className="App" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="App-content">
          <h2>Docendo Discimus</h2>
        </div>
      </div>
      <Grid container>
        <Grid item xs={12} sm={6}>

          <Box m={1} border={3} >
            <Cardcursos />
          </Box>
        </Grid >
        <Grid item xs={12} sm={6} >
          <Box m={1} border={3}>
            <Cardcursosjs />
          </Box>
        </Grid >
        <Grid item xs={12} sm={6}>
          <Box m={1} border={3}>
            <Cardcursosnode />
          </Box>
        </Grid >
        <Grid item xs={12} sm={6}>
          <Box m={1} border={3}>
            <Cardcursossql />
          </Box>
        </Grid >



      </Grid>

    </>

  );
};

export default Cursos;