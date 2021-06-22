const { DataTypes } = require("sequelize");

module.exports=(sequelize)=>{
const model = sequelize.define("profesores",{
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