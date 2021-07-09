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
    return res.status(201).send('usuario creado satisfactoriamente');
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
const SuspenderAlumno = async (req, res) => {
  const {
    idAlumno,
  } = req.params;
  const alumno = await Alumnos.findByPk(idAlumno);
  alumno.suspendido = true;
  return res.status(200).send('alumno suspendido');
};
const BetarAlumno = async (req, res) => {
  const {
    idAlumno,
  } = req.params;
  const alumno = await Alumnos.findByPk(idAlumno);
  alumno.betado = true;
  return res.status(200).send('alumno betado');
};
const ReadmitirAlumno = async (req, res) => {
  const {
    idAlumno,
  } = req.params;
  const alumno = await Alumnos.findByPk(idAlumno);
  if (alumno.suspendido === true) {
    alumno.suspendido = false;
  } else if (alumno.betado === true) {
    alumno.betado = false;
  }
  return res.status(200).send('alumno readmitido');
};

module.exports = {
  registrarAlumno,
  ObtenerAlumnos,
  ModificarAlumnos,
  SuspenderAlumno,
  BetarAlumno,
  ReadmitirAlumno,
};
