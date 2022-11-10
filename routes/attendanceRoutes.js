const express = require('express');
const router = express.Router();
const { createAttendance, deleteAttendance } = require('../controllers/attendance/attendanceController');

router.post('/', createAttendance);
router.delete('/:id', deleteAttendance);

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
 * 
 */