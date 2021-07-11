const {
  Alumnos,
} = require('../models');

const registrarAlumno = async (req, res) => {
  const {
    nombre, edad, mail, password,
  } = req.body;
  try {
    await Alumnos.create({
      nombre,
      edad,
      mail,
      password,
    });
    return res.status(201).send('Alumno creado satisfactoriamente');
  } catch (error) {
    return res.status(500).json({
      mensaje: 'error de servidor',
      error: error.message,
    });
  }
};
const ObtenerAlumnos = async (_req, res) => {
  const alumnos = await Alumnos.findAll();
  return res.status(200).json(alumnos);
};
const ModificarAlumnos = async (req, res) => {
  const {
    nombre,

  } = req.body;
  const {
    idAlumno,
  } = req.params;
  const alumno = await Alumnos.findByPk(idAlumno);
  alumno.nombre = nombre;
  await alumno.save(alumno);
  return res.status(200).send('alumno modificado');
};
const EliminarAlumno = async (req, res) => {
  const {
    id,
  } = req.params;
  await Alumnos.destroy({
    where: {
      id,
    },
  });
  return res.status(200).send('alumno eliminado');
};

module.exports = {
  registrarAlumno,
  ObtenerAlumnos,
  ModificarAlumnos,
  EliminarAlumno,

};
