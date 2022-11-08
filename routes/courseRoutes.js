const express = require('express');
const router = express.Router();
const { listAllCourses, createCourse, deleteCourse, updateCourse, findByID } = require('../controllers/courses/courseController');

router.get('/', listAllCourses);
router.get('/:id', findByID);
router.post('/', createCourse);
router.put('/:id', updateCourse);
router.delete('/:id', deleteCourse);


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
 *               type: list
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

/**
 * @openapi
 * /courses/{courseId}:
 *   get:
 *     summary: Get specific course.
 *     tags: [Course Routes]
 *     parameters:
 *       - name: courseId
 *         in: path
 *         description: ID of course to return
 *         required: true
 *         schema:
 *           type: integer
 *           format: int64 
 *     responses:
 *       200:
 *         description: Returned course which id eqals to courseId.
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

/**
 * @openapi
 * /courses:
 *   post:
 *     summary: Create a new course.
 *     tags: [Course Routes]
 *     requestBody:
 *       description: Create a course
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Course'
 *     responses:
 *       200:
 *         description: Course created.
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

/**
 * @openapi
 * /courses/{courseId}:
 *   put:
 *     summary: Update existing course.
 *     tags: [Course Routes]
 *     parameters:
 *       - name: courseId
 *         in: path
 *         description: ID of course to return
 *         required: true
 *         schema:
 *           type: integer
 *           format: int64 
 *     requestBody:
 *       description: New data for course
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Course'
 *     responses:
 *       200:
 *         description: Course updated.
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

/**
 * @openapi
 * /courses/{courseId}:
 *   delete:
 *     summary: Delete existing course.
 *     tags: [Course Routes]
 *     parameters:
 *       - name: courseId
 *         in: path
 *         description: ID of course to return
 *         required: true
 *         schema:
 *           type: integer
 *           format: int64 
 *     responses:
 *       200:
 *         description: Course deleted.
 *       500:
 *         description: Server error
 */