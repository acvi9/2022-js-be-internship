const { Sequelize, DataTypes} = require('sequelize');
const database = require('../config/database');

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
    }
},
{
    timestamps: false
});

module.exports = Course;