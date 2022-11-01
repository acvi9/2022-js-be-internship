const { Sequelize, DataTypes} = require('sequelize');
const database = require('../config/db-config');

const Student = database.define("student",{
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    surname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    timestamps: false
});

module.exports = Student;