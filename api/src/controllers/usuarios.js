const {
  Alumnos,
} = require('../models');

const registrarUsuario = async (req, res) => {
  const {

    nombre,
    edad,
    mail,
    password,

  } = req.body;
  try {
    await Alumnos.create({
      nombre, edad, mail, password,
    });
    return res.status(201).send('usuario creado satisfactoriamente');
  } catch (error) {
    return res.status(500).json({
      mensaje: 'error de servidor',
      error: error.message,
    });
  }
};
module.exports = {
  registrarUsuario,
};
