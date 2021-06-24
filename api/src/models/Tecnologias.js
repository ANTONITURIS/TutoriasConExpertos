const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const model = sequelize.define("tecnologias", {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },{
    timestamps: false,
  });
  return model;
};
