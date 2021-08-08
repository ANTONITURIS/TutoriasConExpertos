const {
  Sequelize,
} = require('sequelize');
const bcrypt = require('bcrypt');
const TecnologiasFactory = require('./Tecnologias');
const UsuariosFactory = require('./Usuarios');
const ComentariosFactory = require('./Comentarios');
const {
  dbUser, dbName, dbHost, dbPassword,
} = require('../utils/config/index');

const sequelize = new Sequelize(
  `mysql://${dbUser}:${dbPassword}@${dbHost}/${dbName}`,
  {
    logging: false,
  },
);

const Tecnologias = TecnologiasFactory(sequelize);
const Usuarios = UsuariosFactory(sequelize);
const Comentarios = ComentariosFactory(sequelize);

Usuarios.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  /* eslint-disable */
  return await bcrypt.hash(password, salt);
};
Usuarios.comparepassword = async (
  password,
  recivedPassword,

) => {

  return await bcrypt.compare(password, recivedPassword)
};
/* eslint-enable */
Usuarios.hasMany(Comentarios);
Comentarios.belongsTo(Usuarios);
Tecnologias.hasMany(Comentarios);
Comentarios.belongsTo(Tecnologias);
Tecnologias.hasMany(Usuarios);
Usuarios.belongsTo(Tecnologias);

module.exports = {

  conn: sequelize,
  Usuarios,

  Tecnologias,
  Comentarios,
};
