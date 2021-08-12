
import React, { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Navbar from './Navbar'
import swal from 'sweetalert';
import axios from 'axios'
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
        console.log(res.data.token);
        swal('Exito', 'Bienvenido', 'success')
      })

      //.then(() => window.history.back())
      .catch((err) => {

        swal('Error', 'Se produjo un error inesperado. Por favor, intente nuevamente', 'error')
      });


  };


  return (
    <>
      <Navbar />
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

            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              ingresar
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Button ><a href="Paginaprincipal" >¿no estas registrado? registrate</a></Button>
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
