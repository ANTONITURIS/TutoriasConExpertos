const { Sequelize } = require("sequelize");

const ProfesoresFactory = require("./Profesores");
const TecnologiasFactory = require("./Tecnologias");
const AlumnosFactory = require("./Alumnos");

const { dbUser, dbName, dbHost, dbPassword } = require("../utils/config/index");
const sequelize = new Sequelize(
  `mysql://${dbUser}:${dbPassword}@${dbHost}/${dbName}`,
  {
    logging: false,
  }
);
const Profesores = ProfesoresFactory(sequelize);
const Tecnologias = TecnologiasFactory(sequelize);
const Alumnos = AlumnosFactory(sequelize);

module.exports = {
  conn: sequelize,
};
