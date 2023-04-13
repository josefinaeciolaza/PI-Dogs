const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('temperament', {
        // id:{  NO ES NECESARIO ESTO, SEQUELIZE SE LO ASIGNA SOLO.
        //     type: DataTypes.UUID,
        //     defaultValue: DataTypes.UUIDV4,
        //     primaryKey: true,
        //     allowNull: false,
        // },
        name:{
            type: DataTypes.STRING,
        },
    });
}