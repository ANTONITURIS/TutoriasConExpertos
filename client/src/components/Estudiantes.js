import React from 'react'
import { Box, Grid, } from '@material-ui/core';
import Navbar from './Navbar';
import estudiantes from "./Assets/Img/estudiantes.jpg"
import Registroalumnos from './Registroalumnos'

export const Estudiantes = () => {
  return (
    <> <Navbar />
      < Grid container>
        <Grid item xs={12} sm={12} md={12} >
          <Box  >
            <img width='100%' height='550vh' src={estudiantes} alt='' />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12} >
          <Box color="#F0FFFF"
            bgcolor="#FF6347"
            p={2}
            borderRadius='10px'
            textAlign={'left'}
            fontSize={30} m={1}
            fontFamily={'roboto'}
            margin="10px">rellena todos los campos para registrarte como profesor/a. Elige la tecnologia que quieras enseñar</Box>
        </Grid>

      </Grid>
      <Registroalumnos />
    </>
  )
}