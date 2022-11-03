const { Sequelize, DataTypes } = require("sequelize");
const database = require("../config/db-config");

const Professor = database.define("professor", {
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

module.exports = Professor;



/**
 * @swagger
 * components:
 *   schemas:
 *     Professor:
 *       type: object
 *       required:
 *         - name
 *         - surname
 *         - email
 *         - password
 *       properties:
 *         id:
 *           type: number
 *           description: Unique identifier for the professor
 *           example: 1
 *         name:
 *           type: string
 *           description: Name of the professor
 *           example: Andrija
 *         surname:
 *           type: string
 *           description: Surname of the professor
 *           example: Stankovic
 *         email:
 *           type: string
 *           description: Email of the professor
 *           example: andrija@gmail.com
 *         password:
 *           type: string
 *           description: Password of the professor
 *           example: 123456
 */