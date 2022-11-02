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



/**
 * @swagger
 * components:
 *   schemas:
 *     Student:
 *       type: object
 *       required:
 *         - name
 *         - surname
 *         - email
 *         - password
 *       properties:
 *         id:
 *           type: number
 *           description: Unique identifier for the student
 *           example: 1
 *         name:
 *           type: string
 *           description: Name of the student
 *           example: Nikola
 *         surname:
 *           type: string
 *           description: Surname of the student
 *           example: Hromcik
 *         email:
 *           type: string
 *           description: Email of the student
 *           example: nikola@gmail.com
 *         password:
 *           type: string
 *           description: Password of the student
 *           example: 123456
 */