const {DataTypes} = require('sequelize');
const database = require('../config/db-config');

const Terms = database.define('terms',{
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  from: {
    type: DataTypes.DATE,
    allowNull: false
  },
  to: {
    type: DataTypes.DATE,
    allowNull: false
  }
},
{
  timestamps: false
});

module.exports = Terms;



/**
 * @swagger
 * components:
 *   schemas:
 *     Terms:
 *       type: object
 *       required:
 *         - name
 *         - from
 *         - to
 *       properties:
 *         id:
 *           type: number
 *           description: Unique identifier for the student
 *           example: 1
 *         name:
 *           type: string
 *           description: Name of the term
 *           example: January
 *         from:
 *           type: datetime
 *           description: When the term starts
 *           example: 2021-01-01 00:00:00
 *         to:
 *           type: datetime
 *           description: When the term ends
 *           example: 2021-01-31 00:00:00
 */