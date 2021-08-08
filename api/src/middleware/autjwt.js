const jwt = require('jsonwebtoken');
const {
  Usuarios,
} = require('../models/index');
const config = require('../utils/config/index');

const verificarToken = async (req, res, next) => {
  try {
    const token = req.headers['token-acceso'];

    if (token === '') {
      return res.status(403).json({
        mensaje: 'debe haber un token',
      });
    }
    const decodificado = jwt.verify(token, config.SECRET);
    const usuario = await Usuarios.findByPk(decodificado.id, {
      contraseña: 0,

    });

    if (!usuario) {
      return res.status(404).json({
        mensaje: 'usuario no encontrado',
      });
    }
    return next();
  } catch (error) {
    return res.status(401).json({
      mensaje: 'no estas autorizado',
    });
  }
};
module.exports = {
  verificarToken,
};
