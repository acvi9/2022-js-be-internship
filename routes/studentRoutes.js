const express = require('express');
const router = express.Router();
const { listAllStudents, findStudentByID, createStudent, deleteStudent, updateStudent } = require('../controllers/students/studentController');
const {authenticateJWT} = require('../middleware/authorizationMiddleware');


router.get('/', authenticateJWT, listAllStudents);
router.get('/:id', authenticateJWT, findStudentByID);
router.post('/', authenticateJWT, createStudent);
router.put('/:id', authenticateJWT, updateStudent);
router.delete('/:id', authenticateJWT, deleteStudent);


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
 *     security:
 *       - Bearer: []
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
 *
 * @openapi
 * /students/{id}:
 *   get:
 *     summary: Find a student by ID.
 *     tags: [Student Routes]
 *     security:
 *       - Bearer: []
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
 * 
 * @openapi
 * /students:
 *   post:
 *     summary: Creates a new student.
 *     tags: [Student Routes]
 *     security:
 *       - Bearer: []
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               surname:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
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
 * 
 * @openapi
 * /students/{id}:
 *   put:
 *     summary: Updates an existing student.
 *     tags: [Student Routes]
 *     security:
 *       - Bearer: []
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *          required: true
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               surname:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
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
 * 
 * @openapi
 * /students/{id}:
 *   delete:
 *     summary: Deletes a existing student.
 *     tags: [Student Routes]
 *     security:
 *       - Bearer: []
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *          required: true
 *          description: The id of the student.
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
 * 
 * 
 */