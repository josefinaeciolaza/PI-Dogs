const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id:{
      type: DataTypes.UUID,  //codigo alfanumerico, números y letras separados por guiones.
      defaultValue: DataTypes.UUIDV4, //numero aleatorio de UUID.
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image:{
      type: DataTypes.STRING
    },
    height:{
      //altura
      type: DataTypes.STRING,
      allowNull: false
    },
    weight:{
      //peso
      type: DataTypes.STRING,
      allowNull: false
    },
    life_span:{
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {timestamps: false}
  );
};

