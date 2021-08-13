
import React, { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Grid, Box } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import swal from 'sweetalert';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { getTecnologias } from '../redux/actions/actions';
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const tecnologias = useSelector((state) => state.getTecnologias);
  const dispatch = useDispatch();
  console.log(tecnologias);
  const classes = useStyles();
  const [submit, setSubmit] = useState(false);
  const [form, setForm] = useState({
    mail: '', password: '',
  });
  const [errors, setErrors] = useState({
    mail: false, password: false, number: false, empty: false,
  });
  useEffect(() => {
    setErrors({ ...errors, empty: !errors.mail && !errors.password });
  }, [submit]);
  useEffect(() => {
    dispatch(getTecnologias());
  }, []);
  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });



    if (e.target.name === 'password') {
      setErrors(e.target.value !== '' ? { ...errors, password: false } : { ...errors, password: true });
    }
    if (e.target.name === 'mail') {
      const reg = new RegExp('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$');
      setErrors({ ...errors, mail: !reg.test(form.mail) });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);



    console.log(form.mail);
    document.getElementById('formUserCreate').reset()
    axios.post("http://localhost:3001/api/usuarios/login", {


      mail: form.mail,
      password: form.password,


    })

      .then((res) => {
        let tokenUserLoged = res.token;
        console.log(res);
        swal('Exito', 'Bienvenido', 'success')
      })

      .then(() => window.history.back())
      .catch((err) => {

        swal('Error', 'Se produjo un error inesperado. Por favor, intente nuevamente', 'error')
      });


  };


  return (
    <>

      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">

          </Typography>
          <form className={classes.form} id="formUserCreate" onSubmit={handleSubmit} >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="nombre"
                  label="Nombre y Apellido"
                  name="nombre"
                  autoComplete="nombre"
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="edad"
                  label="edad"
                  name="edad"
                  autoComplete="edad"
                  onChange={handleInputChange}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={12}>

                <Box >

                  <label >Tecnologia</label>
                  <select className={classes.paper} >
                    <option value="html y css">html y css</option>
                    <option value=" javascript"> javascript</option>
                    <option value=" mysql"> mysql</option>
                    <option value=" nodejs"> nodejs</option>
                    <option value=" nodejs"> otras</option>
                  </select>

                </Box>

              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="mail"
                  label="Email"
                  name="mail"
                  autoComplete="mail"
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="confirmPassword"
                  label="confirmPassword"
                  type="confirmPassword"
                  id="confirmPassword"
                  autoComplete="current-confirmPassword"
                  onChange={handleInputChange}
                />
              </Grid>

            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Registrar
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Button ><a href="Login" >¿ya estas registrado? Ingresa</a></Button>
              </Grid>
            </Grid>
          </form>
        </div>

        <br>
        </br>

      </Container>
    </>
  );
}
