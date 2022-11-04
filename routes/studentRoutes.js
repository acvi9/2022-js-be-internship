const express = require('express');
const router = express.Router();
const { listAllStudents, findByID } = require('../controllers/students/studentController');

router.get('/', listAllStudents);
router.get('/:id', findByID);

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
 

 * @openapi
 * /students/id/{id}:
 *   get:
 *     summary: Find a student by ID.
 *     tags: [Student Routes]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *          required: true
 *          description: Numeric ID of the student to get
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