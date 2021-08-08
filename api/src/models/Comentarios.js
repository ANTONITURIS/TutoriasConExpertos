const {
  DataTypes,
} = require('sequelize');

module.exports = (sequelize) => {
  const model = sequelize.define('comentarios', {
    cuerpo: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    tipo: {
      type: DataTypes.ENUM(['preguntas', 'respuestas']),

    },
  });
  return model;
};
