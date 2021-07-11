const {
  Profesores,
} = require('../models');

const registrarProfesor = async (req, res) => {
  const {
    nombre, edad, mail, password,
  } = req.body;
  try {
    await Profesores.create({
      nombre,
      edad,
      mail,
      password,
    });
    return res.status(201).send('Profesor creado satisfactoriamente');
  } catch (error) {
    return res.status(500).json({
      mensaje: 'error de servidor',
      error: error.message,
    });
  }
};
const ObtenerProfesores = async (_req, res) => {
  const profesores = await Profesores.findAll();
  return res.status(200).json(profesores);
};
const ModificarProfesores = async (req, res) => {
  const {
    nombre,

  } = req.body;
  const {
    idProfesor,
  } = req.params;
  const profesor = await Profesores.findByPk(idProfesor);
  profesor.nombre = nombre;
  await profesor.save(profesor);
  return res.status(200).send('profesor modificado');
};
const EliminarProfesor = async (req, res) => {
  const {
    id,
  } = req.params;
  await Profesores.destroy({
    where: {
      id,
    },
  });
  return res.status(200).send('profesor eliminado');
};

module.exports = {
  registrarProfesor,
  ObtenerProfesores,
  ModificarProfesores,
  EliminarProfesor,

};
