const express = require('express');
const router = express.Router();
const { listAllExams, findExamByID, createExam, updateExam, deleteExam} = require('../controllers/exams/examController');

router.get('/', listAllExams);
router.get('/:id', findExamByID);
router.post('/', createExam);
router.put('/:id', updateExam);
router.delete('/:id', deleteExam);

module.exports = router;

/**
 * @openapi
 * tags:
 *   name: Exam Routes
 *   description: All routes for exams.
 */



/**
 * @openapi
 * /exams:
 *   get:
 *     summary: Lists all exams.
 *     tags: [Exam Routes]
 *     responses:
 *       200:
 *         description: All exams returned
 *         content:
 *           application/json:
 *             schema:
 *               type: list
 *               schema:
 *                 $ref: '#/components/schemas/Exam'
 *               example:
 *                 id: 1
 *                 date_time: 2022-01-17T04:33:12.000Z
 *                 status: false
 *                 points: 7
 *                 professorId: 1
 *                 courseId: 1
 *                 termId: 1
 * 
 *       500:
 *         description: Server error
 */

/**
 * @openapi
 * /exams/{id}:
 *   get:
 *     summary: Get specific Exam.
 *     tags: [Exam Routes]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of Exam to return
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Returned Exam which id eqals to id.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               schema:
 *                 $ref: '#/components/schemas/Exam'
 *               example:
 *                 id: 1
 *                 date_time: 2022-01-17T04:33:12.000Z
 *                 status: false
 *                 points: 7
 *                 professorId: 1
 *                 courseId: 1
 *                 termId: 1
 *       500:
 *         description: Server error
 */

/**
 * @openapi
 * /exams:
 *   post:
 *     summary: Create a new Exam.
 *     tags: [Exam Routes]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               date_time:
 *                 type: string
 *               status:
 *                 type: number
 *               points:
 *                 type: number
 *               professorId:
 *                 type: number
 *               courseId:
 *                 type: number
 *               termId:
 *                 type: number
 *     responses:
 *       200:
 *         description: Exam created.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               schema:
 *                 $ref: '#/components/schemas/Exam'
 *               example:
 *                 id: 1
 *                 date_time: 2022-01-17T04:33:12.000Z
 *                 status: false
 *                 points: 7
 *                 professorId: 1
 *                 courseId: 1
 *                 termId: 1
 *       500:
 *         description: Server error
 */

/**
 * @openapi
 * /exams/{id}:
 *   put:
 *     summary: Update existing Exam.
 *     tags: [Exam Routes]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of Exam to return
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
 *               date_time:
 *                 type: string
 *               status:
 *                 type: number
 *               points:
 *                 type: number
 *               professorId:
 *                 type: number
 *               courseId:
 *                 type: number
 *               termId:
 *                 type: number
 *     responses:
 *       200:
 *         description: Exam updated.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               schema:
 *                 $ref: '#/components/schemas/Exam'
 *               example:
 *                 id: 1
 *                 date_time: 2022-01-17T04:33:12.000Z
 *                 status: false
 *                 points: 7
 *                 professorId: 1
 *                 courseId: 1
 *                 termId: 1
 *       500:
 *         description: Server error
 */

/**
 * @openapi
 * /exams/{id}:
 *   delete:
 *     summary: Delete existing Exam.
 *     tags: [Exam Routes]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of Exam to return
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Exam deleted.
 *       500:
 *         description: Server error
 */