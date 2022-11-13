const express = require('express');
const router = express.Router();
const { createAttendance, deleteAttendance, listStudentsOnCourse, listCoursesOfStudent } = require('../controllers/attendance/attendanceController');
const {authenticateJWT} = require('../middleware/authorizationMiddleware');

router.post('/', authenticateJWT, createAttendance);
router.delete('/:id', authenticateJWT, deleteAttendance);
router.get('/course/:id', authenticateJWT, listStudentsOnCourse);
router.get('/student/:id', authenticateJWT, listCoursesOfStudent);

module.exports = router;

/**
 * @openapi
 * tags:
 *   name: Student Routes
 *   description: All routes for students.
 */


/**
 * @openapi
 * /attendance:
 *   post:
 *     summary: Creates a new attendance instance.
 *     tags: [Attendance Routes]
 *     security:
 *       - Bearer: []
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               studentId:
 *                 type: number
 *               courseId:
 *                 type: number
 *     responses:
 *       200:
 *         description: Example returned
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               schema:
 *                 $ref: '#/components/schemas/Attendance'
 *               example:
 *                 id: 1
 *                 studentId: 1
 *                 courseId: 1
 *       500:
 *         description: Server error
 * 
 * 
 * @openapi
 * /attendance/{id}:
 *   delete:
 *     summary: Deletes a existing attendance.
 *     tags: [Attendance Routes]
 *     security:
 *       - Bearer: []
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *          required: true
 *          description: The id of the attendance.
 *     responses:
 *       200:
 *         description: Example returned
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               schema:
 *                 $ref: '#/components/schemas/Attendance'
 *               example:
 *                 id: 1
 *                 studentId: 1
 *                 courseId: 1
 *       500:
 *         description: Server error
 * 
 * @openapi
 * /attendance/course/{id}:
 *   get:
 *     summary: Gets all students per given course.
 *     tags: [Attendance Routes]
 *     security:
 *       - Bearer: []
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *          required: true
 *          description: The id of the course.
 *     responses:
 *       200:
 *         description: Example returned
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               schema:
 *                 $ref: '#/components/schemas/Attendance'
 *               example:
 *                 id: 1
 *                 studentId: 1
 *                 courseId: 1
 * @openapi
 * /attendance/student/{id}:
 *   get:
 *     summary: Gets all courses per given student.
 *     tags: [Attendance Routes]
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
 *                 $ref: '#/components/schemas/Attendance'
 *               example:
 *                 id: 1
 *                 studentId: 1
 *                 courseId: 1
 *       500:
 *         description: Server error
 * 
 */