const {
  DataTypes,
} = require('sequelize');

module.exports = (sequelize) => {
  const model = sequelize.define('profesores', {
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
