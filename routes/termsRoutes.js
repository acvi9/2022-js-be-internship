const express = require('express');
const router = express.Router();
const { listAllTerms, findByID, createTerm, deleteTerm, updateTerm } = require('../controllers/terms/termsController');

router.get('/', listAllTerms);
router.get('/:id', findByID);
router.post('/', createTerm);
router.put('/:id', updateTerm);
router.delete('/:id', deleteTerm);


module.exports = router;


/**
 * @openapi
 * tags:
 *   name: Terms Routes
 *   description: All routes for terms.
 */



/**
 * @openapi
 * /terms:
 *   get:
 *     summary: Lists all terms.
 *     tags: [Terms Routes]
 *     responses:
 *       200:
 *         description: Example returned
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               schema:
 *                 $ref: '#/components/schemas/Terms'
 *               example:
 *                 id: 1
 *                 name: Julski
 *                 from: 06.06.2022
 *                 to: 10.06.2022
 *       500:
 *         description: Server error
 * 
 * @openapi
 * /terms/{id}:
 *   get:
 *     summary: List specific term.
 *     tags: [Terms Routes]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *          required: true
 *     responses:
 *       200:
 *         description: Example returned
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               schema:
 *                 $ref: '#/components/schemas/Terms'
 *               example:
 *                 id: 1
 *                 name: junski
 *                 from: 06.06.2022
 *                 to: 10.06.2022
 *       500:
 *         description: Server error
 * 
 * @openapi
 * /terms:
 *   post:
 *     summary: create a professor.
 *     tags: [Terms Routes]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               from:
 *                 type: string
 *               to:
 *                 type: string
 *     responses:
 *       200:
 *         description: Example returned
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               schema:
 *                 $ref: '#/components/schemas/Terms'
 *               example:
 *                 id: 1
 *                 name: Julski
 *                 from: 06.06.2022
 *                 to: 10.06.2022
 *       500:
 *         description: Server error 
 * 
 * @openapi
 * /terms/{id}:
 *   put:
 *     summary: Updates an existing professor.
 *     tags: [Terms Routes]
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
 *               from:
 *                 type: string
 *               to:
 *                 type: string
 *     responses:
 *       200:
 *         description: Example returned
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               schema:
 *                 $ref: '#/components/schemas/Terms'
 *               example:
 *                 id: 1
 *                 name: Julski
 *                 from: 06.06.2022
 *                 to: 10.06.2022
 *       500:
 *         description: Server error
 * 
 *@openapi
 * /terms/{id}:
 *   delete:
 *     summary: Deletes a existing professor.
 *     tags: [Terms Routes]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *          required: true
 *          description: The id of the professor.
 *     responses:
 *       200:
 *         description: Example returned
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               schema:
 *                 $ref: '#/components/schemas/Terms'
 *               example:
 *                 id: 1
 *                 name: Julski
 *                 from: 06.06.2022
 *                 to: 10.06.2022
 *       500:
 *         description: Server error
 */