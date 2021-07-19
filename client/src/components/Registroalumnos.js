import React from 'react'
import { Box, Grid, } from '@material-ui/core';
import Button from '@material-ui/core/Button'
import { useForm } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';

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
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  const classes = useStyles();
  console.log(errors);
  return (
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Nombre</label>
            <input className={classes.paper} type="text"  {...register("nombre", { required: true })} />
          </form>
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
          margin="10px"><form>
            <label>Edad</label>
            <input className={classes.paper} type="number" {...register("edad")} />
          </form>
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
            margin="10px"><form>
              <label >Email</label>
              <input className={classes.paper} type="email"  {...register("email", { required: true })} />
            </form>
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
            margin="10px"><form>
              <label >Password</label>
              <input className={classes.paper} type="text"  {...register("password", { required: true })} />
            </form>
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
            margin="10px"><form>
              <label >Tecnologia</label>
              <select className={classes.paper} {...register("tecnologia", { required: true })}>
                <option value="html y css">html y css</option>
                <option value=" javascript"> javascript</option>
                <option value=" mysql"> mysql</option>
                <option value=" nodejs"> nodejs</option>
                <option value=" nodejs"> otras</option>
              </select>
            </form>
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
            {
              function handelSubmit(e) {
                e.preventDefault()
              }
            }
            <form onSubmit={handleSubmit}>
              <button type="submit" className="envio" > <Button size="large" variant="contained" color="disabled" disableElevation>
                Enviar
              </Button></button>
            </form>
          </Box>
        </Box>
      </Grid>
    </Grid>

  )
}
export default Registroalumno