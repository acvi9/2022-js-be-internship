const express = require('express');
const router = express.Router();
const { listAllTerms, findTermByID, createTerm, deleteTerm, updateTerm } = require('../controllers/terms/termsController');
const {authenticateJWT} = require('../middleware/authorizationMiddleware');

router.get('/', authenticateJWT, listAllTerms);
router.get('/:id',authenticateJWT, findTermByID);
router.post('/', authenticateJWT, createTerm);
router.put('/:id', authenticateJWT, updateTerm);
router.delete('/:id', authenticateJWT, deleteTerm);


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
 *     security:
 *       - Bearer: []
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
 *     summary: Create a term.
 *     tags: [Terms Routes]
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
 *     summary: Updates an existing term.
 *     tags: [Terms Routes]
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
 *     summary: Deletes a existing term.
 *     tags: [Terms Routes]
 *     security:
 *       - Bearer: []
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *          required: true
 *          description: The id of the term.
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