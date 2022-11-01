const { Sequelize, DataTypes} = require('sequelize');
const database = require('../config/db-config');

const Course = database.define("course",{
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    espb: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    professorId:{
        type: DataTypes.INTEGER,
        
    }
},
{
    timestamps: false
});

module.exports = Course;