const express = require('express');
const router = express.Router();
const { listAllExams: listAllExams, createExam, deleteExam, updateExam, findByID } = require('../controllers/exams/examController');

router.get('/', listAllExams);
router.get('/:id', findByID);
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
 *                 name: Software Engineering
 *                 description: Software Engineering basics
 *                 espb: 7
 *                 professorId: 1
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
 *           format: int64 
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
 *                 name: Software Engineering
 *                 description: Software Engineering basics
 *                 espb: 7
 *                 professorId: 1
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
 *         description: Exam created.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               schema:
 *                 $ref: '#/components/schemas/Exam'
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
 *         description: Exam updated.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               schema:
 *                 $ref: '#/components/schemas/Exam'
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