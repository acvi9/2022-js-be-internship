const express = require('express');
const router = express.Router();
const { listAllProfessors } = require('../controllers/professorController');

router.get('/professors', listAllProfessors);

module.exports = router;


/**
 * @openapi
 * tags:
 *   name: Professor Routes
 *   description: All routes for professors.
 */



/**
 * @openapi
 * /professors:
 *   get:
 *     summary: Lists all professors.
 *     tags: [Professor Routes]
 *     responses:
 *       200:
 *         description: Example returned
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               schema:
 *                 $ref: '#/components/schemas/Professor'
 *               example:
 *                 id: 1
 *                 name: Mijodrag
 *                 surname: Zivkovic
 *                 email: mijodrag@gmail.com
 *                 password: 123456
 *       500:
 *         description: Server error
 */