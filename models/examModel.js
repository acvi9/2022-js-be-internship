const { DataTypes } = require('sequelize');
const database = require('../config/db-config');

const Exam = database.define('exam', {
  date_time: {
    type: DataTypes.DATE,
    allowNull: false
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  points: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
},
{
  timestamps: false
});

module.exports = Exam;



/**
 * @swagger
 * components:
 *   schemas:
 *     Exam:
 *       type: object
 *       required:
 *         - studentId
 *         - courseId
 *         - termId
 *         - date_time
 *         - status
 *         - points
 *       properties:
 *         id:
 *           type: number
 *           description: Unique identifier for the exam
 *           example: 1
 *         studentId:
 *           type: number
 *           description: Unique identifier for the student on exam
 *           example: 2
 *         courseId:
 *           type: number
 *           description: Unique identifier of course for the exam
 *           example: 5
 *         termId:
 *           type: number
 *           description: Unique identifier for the exams term
 *           example: 5
 *         date_time:
 *           type: string
 *           description: date and time of the exam
 *           example: 2022-01-17T04:33:12.000Z
 *         status:
 *           type: boolean
 *           description: is exam passed or no
 *           example: false
 *         points:
 *           type: number
 *           description: how many points student has
 *           example: 89
 */