const {
  Tecnologias, Usuarios, Comentarios,
} = require('../models/index');

const CrearComentarios = async (req, res) => {
  const {
    cuerpo,
    tipo,
    usuarioId,
    tecnologiaId,
  } = req.body;
  if (!cuerpo) {
    return res.status(401).json('cuerpo requerido');
  }
  if (!tipo) {
    return res.status(401).json('tipo requerido');
  }

  if (!usuarioId) {
    return res.status(401).json('usuarioId requerido');
  }
  if (!tecnologiaId) {
    return res.status(401).json('tecnologoiaId requerida');
  }
  try {
    const usuario = await Usuarios.findByPk(usuarioId);
    if (!usuario) {
      return res.status(404).json('usuario no existe');
    }
    await Comentarios.create({
      cuerpo,
      tipo,
      usuarioId,
      tecnologiaId,
    });
    return res.status(201).json('comentario creado satisfactoriamente');
  } catch (error) {
    return error.message;
  }
};
const ModificarComentarios = async (req, res) => {
  const {

    cuerpo,
    tecnologiaId,
  } = req.body;
  const {
    id,
  } = req.params;
  if (!id) {
    return res.status(401).json('id requerido');
  }
  if (!cuerpo) {
    return res.status(401).json('cuerpo requerido');
  }
  if (!tecnologiaId) {
    return res.status(401).json('tecnologia requerida');
  }
  try {
    const comentario = await Comentarios.findByPk(id);
    if (!comentario) {
      return res.status(200).json('este comentario no existe');
    }
    comentario.cuerpo = cuerpo;
    comentario.tecnologiaId = tecnologiaId;
    await comentario.save();
    return res.status(200).json('comentario modificado satisfactoriamente');
  } catch (error) {
    return error.message;
  }
};

const ObtenerComentarios = async (_req, res) => {
  const comentarios = await Comentarios.findAll();
  if (!comentarios) {
    return res.status(404).json('no existen comentarios ');
  }
  return res.status(200).json(comentarios);
};

module.exports = {
  CrearComentarios,
  ModificarComentarios,
  ObtenerComentarios,
};
