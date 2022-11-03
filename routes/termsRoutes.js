const express = require('express');
const router = express.Router();
const { listAllTerms } = require('../controllers/terms/termsController');

router.get('/', listAllTerms);

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
 */