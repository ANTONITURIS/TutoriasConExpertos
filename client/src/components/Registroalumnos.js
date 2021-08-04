import React from 'react'
import { Box, Grid, } from '@material-ui/core';
import Button from '@material-ui/core/Button'
import { useForm } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
    display: 'flex',
    fontSize: '15px',
    borderRadius: "10px",
    fontFamily: "roboto",
  },
}));





export const Registroalumno = () => {



  const { register, handleSubmit, } = useForm();

  const onSubmit = async () => { return console.log(await axios.get('http://localhost:3001')) }

  const classes = useStyles();




  return (






    <form onSubmit={handleSubmit(onSubmit)}>
      < Grid container>
        <Grid item xs={12} sm={12} md={12} >
          <Box color="#F0FFFF"
            bgcolor="#FF6347"
            p={2}
            borderRadius='10px'
            textAlign={'left'}
            fontSize={30} m={1}
            fontFamily={'roboto'}
            margin="10px">

            <label>Nombre</label>
            <input className={classes.paper} type="text"  {...register("nombre", { required: true })} />

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
            margin="10px">
            <label>Edad</label>
            <input className={classes.paper} type="number" {...register("edad")} />

          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12} >
          <Box>
            <Box color="#F0FFFF"
              bgcolor="#FF6347"
              p={2}
              borderRadius='10px'
              textAlign={'left'}
              fontSize={30} m={1}
              fontFamily={'roboto'}
              margin="10px">
              <label >Email</label>
              <input className={classes.paper} type="email"  {...register("email", { required: true })} />

            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Box>
            <Box color="#F0FFFF"
              bgcolor="#FF6347"
              p={2}
              borderRadius='10px'
              textAlign={'left'}
              fontSize={30} m={1}
              fontFamily={'roboto'}
              margin="10px">
              <label >Password</label>
              <input className={classes.paper} type="text"  {...register("password", { required: true })} />

            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Box>
            <Box color="#F0FFFF"
              bgcolor="#FF6347"
              p={2}
              borderRadius='10px'
              textAlign={'left'}
              fontSize={30} m={1}
              fontFamily={'roboto'}
              margin="10px">
              <label >Tecnologia</label>
              <select className={classes.paper} {...register("tecnologia", { required: true })}>
                <option value="html y css">html y css</option>
                <option value=" javascript"> javascript</option>
                <option value=" mysql"> mysql</option>
                <option value=" nodejs"> nodejs</option>
                <option value=" nodejs"> otras</option>
              </select>

            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Box>
            <Box color="#F0FFFF"
              bgcolor="#FF6347"
              p={2}
              borderRadius='10px'
              textAlign={'left'}
              fontSize={30} m={1}
              fontFamily={'roboto'}
              margin="10px">

              <Button type="submit" size="large" variant="contained" color="primary" disableElevation>
                Enviar
              </Button>

            </Box>
          </Box>
        </Grid>
      </Grid>
    </form>
  )
}
export default Registroalumno