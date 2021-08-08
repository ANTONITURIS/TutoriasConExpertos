const {
  Tecnologias,
} = require('../models/index');

const CrearTecnologia = async (req, res) => {
  const {
    nombre,
    descripcion,
  } = req.body;
  if (!nombre) {
    return res.status(401).json('nombre requerido');
  }
  if (!descripcion) {
    return res.status(401).json('descripcion requerida');
  }
  try {
    const respuesta = await Tecnologias.findOne({
      where: {
        nombre,
      },
    });
    if (respuesta) {
      return res.status(200).json('esta tecnologia ya existe');
    }
    await Tecnologias.create({
      nombre,
      descripcion,
    });
    return res.status(201).json('tecnologia creada satisfactoriamente');
  } catch (error) {
    return error.message;
  }
};
const ModificarTecnologia = async (req, res) => {
  const {

    nombre,
    descripcion,
  } = req.body;
  const {
    id,
  } = req.params;
  if (!id) {
    return res.status(401).json('id requerido');
  }
  if (!nombre) {
    return res.status(401).json('nombre requerido');
  }
  if (!descripcion) {
    return res.status(401).json('descripcion requerida');
  }
  try {
    const tecnologia = await Tecnologias.findByPk(id);
    if (!tecnologia) {
      return res.status(200).json('esta tecnologia no existe');
    }
    tecnologia.nombre = nombre;
    tecnologia.descripcion = descripcion;
    await tecnologia.save();
    return res.status(201).json('tecnologia modificada satisfactoriamente');
  } catch (error) {
    return error.message;
  }
};

const ObtenerTecnologias = async (_req, res) => {
  const tecnologias = await Tecnologias.findAll();
  if (!tecnologias) {
    return res.status(404).json('no existen tecnologias ');
  }
  return res.status(200).json(tecnologias);
};

module.exports = {
  CrearTecnologia,
  ModificarTecnologia,
  ObtenerTecnologias,
};
