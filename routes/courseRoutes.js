const express = require('express');
const router = express.Router();
const { listAllCourses } = require('../controllers/courses/courseController');

router.get('/', listAllCourses);

module.exports = router;

/**
 * @openapi
 * tags:
 *   name: Course Routes
 *   description: All routes for courses.
 */



/**
 * @openapi
 * /courses:
 *   get:
 *     summary: Lists all courses.
 *     tags: [Course Routes]
 *     responses:
 *       200:
 *         description: All courses returned
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               schema:
 *                 $ref: '#/components/schemas/Course'
 *               example:
 *                 id: 1
 *                 name: Software Engineering
 *                 description: Software Engineering basics
 *                 espb: 7
 *                 professorId: 1
 *       500:
 *         description: Server error
 */