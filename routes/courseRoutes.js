const express = require('express');
const router = express.Router();
const { listAllCourses, createCourse, deleteCourse, updateCourse, findCourseByID } = require('../controllers/courses/courseController');
const {authenticateJWT} = require('../middleware/authorizationMiddleware');

router.get('/', listAllCourses);
router.get('/:id', findCourseByID);
router.post('/', authenticateJWT, createCourse);
router.put('/:id', authenticateJWT, updateCourse);
router.delete('/:id', authenticateJWT, deleteCourse);


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
 * /courses/{id}:
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
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               espb:
 *                 type: string
 *               professorId:
 *                 type: string
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
 * /courses/{id}:
 *   put:
 *     summary: Update existing course.
 *     tags: [Course Routes]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of course to return
 *         required: true
 *         schema:
 *           type: integer
 *           format: int64 
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               espb:
 *                 type: string
 *               professorId:
 *                 type: string
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
 * /courses/{id}:
 *   delete:
 *     summary: Delete existing course.
 *     tags: [Course Routes]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of course to return
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Course deleted.
 *       500:
 *         description: Server error
 */