const {DataTypes} = require('sequelize');
const database = require('../config/db-config');

const Attendance = database.define('attendance',{
  studentId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  courseId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
},
{
  timestamps: false
});

module.exports = Attendance;


/**
 * @swagger
 * components:
 *   schemas:
 *     Attendance:
 *       type: object
 *       required:
 *         - studentId
 *         - courseId
 *       properties:
 *         id:
 *           type: number
 *           description: Unique identifier for the attendance
 *           example: 1
 *         studentId:
 *           type: string
 *           description: ID of the student
 *           example: Nikola
 *         courseId:
 *           type: string
 *           description: ID of the course
 *           example: Hromcik
 */