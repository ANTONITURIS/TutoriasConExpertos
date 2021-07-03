const {
  Sequelize,
} = require('sequelize');

const ProfesoresFactory = require('./Profesores');
const TecnologiasFactory = require('./Tecnologias');
const AlumnosFactory = require('./Alumnos');

const {
  dbUser, dbName, dbHost, dbPassword,
} = require('../utils/config/index');

const sequelize = new Sequelize(
  `mysql://${dbUser}:${dbPassword}@${dbHost}/${dbName}`,
  {
    logging: false,
  },
);
const Profesores = ProfesoresFactory(sequelize);
const Tecnologias = TecnologiasFactory(sequelize);
const Alumnos = AlumnosFactory(sequelize);

Tecnologias.hasMany(Profesores);
Profesores.belongsTo(Tecnologias);
Tecnologias.hasMany(Alumnos);
Alumnos.belongsTo(Tecnologias);
Profesores.hasMany(Alumnos);
Alumnos.belongsTo(Profesores);
module.exports = {

  conn: sequelize,
  Alumnos,
  Profesores,
  Tecnologias,
};
