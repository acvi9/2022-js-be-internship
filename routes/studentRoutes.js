const express = require('express');
const router = express.Router();
const { listAllStudents } = require('../controllers/students/studentController');

router.get('/students', listAllStudents);

module.exports = router;


/**
 * @openapi
 * tags:
 *   name: Student Routes
 *   description: All routes for students.
 */



/**
 * @openapi
 * /students:
 *   get:
 *     summary: Lists all students.
 *     tags: [Student Routes]
 *     responses:
 *       200:
 *         description: Example returned
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               schema:
 *                 $ref: '#/components/schemas/Student'
 *               example:
 *                 id: 1
 *                 name: Mijodrag
 *                 surname: Zivkovic
 *                 email: mijodrag@gmail.com
 *                 password: 123456
 *       500:
 *         description: Server error
 */