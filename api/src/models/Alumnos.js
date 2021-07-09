const {
  DataTypes,
} = require('sequelize');

module.exports = (sequelize) => {
  const model = sequelize.define('alumnos', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    edad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    mail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    betado: {
      type: DataTypes.BOOLEAN,
    },
    suspendido: {
      type: DataTypes.BOOLEAN,
    },

  }, {
    timestamps: false,
  });
  return model;
};
