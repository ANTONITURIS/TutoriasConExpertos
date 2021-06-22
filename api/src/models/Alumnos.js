const { DataTypes } = require("sequelize");

module.exports=(sequelize)=>{
const model = sequelize.define("alumnos",{
    nombre:{
        type:DataTypes.STRING,
        allowNull:false
    },
    edad:{
        type:DataTypes.NUMBER,
        allowNull:false
    },
    mail:{
        type:DataTypes.STRING,
        allowNull:false
    },


})
}