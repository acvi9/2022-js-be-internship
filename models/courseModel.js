const {DataTypes} = require('sequelize');
const database = require('../config/db-config');

const Course = database.define('course',{
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



/**
 * @swagger
 * components:
 *   schemas:
 *     Course:
 *       type: object
 *       required:
 *         - name
 *         - description
 *         - espb
 *         - professorId
 *       properties:
 *         id:
 *           type: number
 *           description: Unique identifier for the student
 *           example: 1
 *         name:
 *           type: string
 *           description: Name of the course
 *           example: Math
 *         description:
 *           type: string
 *           description: Description of the course
 *           example: This is a math course
 *         espb:
 *           type: number
 *           description: Number of points for the course
 *           example: 8
 *         professorId:
 *           type: number
 *           description: ID of the professor
 *           example: 1
 */