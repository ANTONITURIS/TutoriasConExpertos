import React from 'react'
import { Box, Grid, } from '@material-ui/core';
import Fondoprincipal from './Assets/Img/books-5937716_1920.jpg'
import { Button } from '@material-ui/core';
import aprender from './Assets/Img/aprender.jpg'
import profemadera from './Assets/Img/profemadera.jpg'
import '@fontsource/roboto';
import Navbar from './Navbar';


const Paginaprincipal = () => {
  return (
    <div>
      <Navbar />
      <Grid container>
        <Box
          fontFamily="roboto"
          fontSize="15px"
          color="#CC0000"
          p={2}
          position="absolute"
          top={100}
          left="5%"
          zIndex="modal"><h1>Docendo Discimus</h1></Box>
        <Grid item xs={12} sm={12} md={12}>
          <Box>
            <img width='100%' height="400" src={Fondoprincipal} alt="" />
          </Box>
        </Grid >
        <Grid item xs={12} sm={12} md={12} >
          <Box color="#CC0000"
            bgcolor="#FFFF00"
            p={2}
            borderRadius='10px'
            textAlign={'left'}
            fontSize={20} m={1}
            fontFamily={'roboto'}
            margin="10px"
          >
            En docendo discimus puedes realizar cursos virtuales sobre las tecnologias mas demandadas y tambien impartir clases si lo que te gusta es enseñar.

          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6} >

          <Box color="#CC0000"
            bgcolor="#97FF97"
            p={2}
            borderRadius='10px'
            textAlign={'left'}
            fontSize={20} m={1}
            fontFamily={'roboto'}
            margin="10px"
          >
            <Button href="Estudiantes">
              quiero aprender!!
              registrate como alumno</Button>
          </Box> <Box color="#CC0000"
            bgcolor="#92AD85"

            p={1}
            borderRadius='10px'
            textAlign={'left'}
            fontSize={20}
            m={1}
            fontFamily={'roboto'}
            margin="10px"><img margin='auto'
              display='block'
              Width='100%'

              src={aprender} alt="" ></img></Box>


        </Grid>
        <Grid item xs={12} sm={6} md={6} >
          <Box color="#CC0000"
            bgcolor="#FFBD5C"
            p={2}
            borderRadius='10px'
            textAlign={'left'}
            fontSize={20} m={1}
            fontFamily={'roboto'}
            margin="10px"
          >
            <Button href="Profesores">
              quiero enseñar!!
              Registrate como profesor</Button>
          </Box> <Box color="#CC0000"
            bgcolor="#92AD85"

            p={1}
            borderRadius='10px'
            textAlign={'left'}
            fontSize={20}
            m={1}
            fontFamily={'roboto'}
            margin="10px"><img margin='auto'
              display='block'
              Width='100%'

              src={profemadera} alt="" ></img>


          </Box>
        </Grid>

      </Grid>

    </div >
  )
}

export default Paginaprincipal
