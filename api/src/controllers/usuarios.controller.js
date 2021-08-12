const jwt = require('jsonwebtoken');
const config = require('../utils/config/index');
const {
  Usuarios,
} = require('../models/index');
const {
  Tecnologias,
} = require('../models/index');

const registrarUsuario = async (req, res) => {
  const {
    nombre, edad, mail, password, tipo, tecnologiaId,
  } = req.body;

  const edadSTR = edad.toString();
  if (edadSTR.length !== 2) return res.send('la edad tiene que ser entre 10 y 99');
  if (!nombre.length > 4) return res.send('nombre obligatorio y mas de 4 caracteres');
  if (!mail.length) return res.send('mail requerido');
  if (!tecnologiaId) return res.send('tecnologia requerida');
  const resultado = await Usuarios.findOne({
    where: {
      mail,
    },
  });
  if (resultado) {
    return res.send('este usuario ya esta registrado');
  }
  if (!password.length >= 8) return res.send('password obligatoria almenos 8 caracteres');
  if (!tipo) return res.send('elige un role');
  try {
    const usuarioCreado = await Usuarios.create({
      nombre,
      edad,
      mail,
      password: await Usuarios.encryptPassword(password),
      tipo,
      tecnologiaId,
    });

    const token = jwt.sign(
      {
        id: usuarioCreado.id,
      },
      config.SECRET,
      {
        expiresIn: 86400, // 24 horas
      },
    );
    return res.status(201).json({
      token,
    });
  } catch (error) {
    return res.status(500).json({
      mensaje: 'error de servidor',
      error: error.message,
    });
  }
};
const loginUsuario = async (req, res) => {
  const {
    mail, password,
  } = req.body;

  if (!mail && mail === '' && !password && password === '') {
    return res.send('campos obligatorios');
  }

  const registrado = await Usuarios.findOne({
    where: {
      mail,
    },
  });

  if (!registrado) {
    return res.status(404).send('este usuario no esta registrado');
  }
  const passok = await Usuarios.comparepassword(password, registrado.password);
  if (passok === false) {
    return res.status(401).send('la contraseña no coincide');
  }
  const token = jwt.sign(
    {
      id: registrado.id,
    },
    config.SECRET,
    {
      expiresIn: 86400, // 24 horas
    },
  );
  return res.status(200).json({
    token,
  });
};

const ObtenerUsuarios = async (_req, res) => {
  const usuarios = await Usuarios.findAll({
    include: [Tecnologias],
  });
  if (!usuarios.length) return res.send('no se encontraron usuarios registrados');
  return res.status(200).json(usuarios);
};

const ObtenerUsuariosId = async (req, res) => {
  const {
    id,
  } = req.params;
  if (!id.length) return res.send('id requerido');
  const idInt = parseInt(id, 10);
  try {
    const usuario = await Usuarios.findByPk(idInt, {
      include: [Tecnologias],
    });
    if (!usuario) return res.send('el usuario no existe');
    return res.status(200).json({
      messagio: 'usuario encontrado', usuario,
    });
  } catch (error) {
    return res.status(500).send('error del servidor');
  }
};

const ModificarUsuarios = async (req, res) => {
  const {
    nombre,
    edad,
    password,

  } = req.body;

  const edadSTR = edad.toString();
  if (!edadSTR || edadSTR.length !== 2) return res.send('la edad tiene que ser entre 10 y 99');
  if (!nombre.length > 4) return res.send('nombre obligatorio y mas de 4 caracteres');
  if (!password.length >= 8) return res.send('password obligatoria almenos 8 caracteres');

  const {
    id,
  } = req.params;
  if (id.length === 0) return res.send('id requerido');
  const idInt = parseInt(id, 10);

  try {
    const usuario = await Usuarios.findByPk(idInt);
    if (!usuario) return res.send('el usuario no existe');
    usuario.nombre = nombre;
    usuario.edad = edad;
    usuario.password = password;
    await usuario.save();
    return res.status(200).send('usuario modificado');
  } catch (error) {
    return res.status(500).send('error del servidor');
  }
};
module.exports = {
  registrarUsuario,
  ObtenerUsuarios,
  ModificarUsuarios,
  ObtenerUsuariosId,
  loginUsuario,
};
