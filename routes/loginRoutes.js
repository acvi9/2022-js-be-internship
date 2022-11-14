const express = require('express');
const router = express.Router();
const {login} = require('../controllers/login/loginController');

router.post('/', login);

module.exports = router;

/**
 * @openapi
 * components:
 *   securitySchemes:
 *     Bearer:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

/**
 * @openapi
 * tags:
 *   name: Login Routes
 *   description: All routes for login.
 */

/**
 * @openapi
 * /login:
 *   post:
 *     summary: Allow user to log in.
 *     tags: [Login Routes]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             example:
 *               email: profa.profic1@gmail.com
 *               password: 12345
 *     responses:
 *       200:
 *         description: Login successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 jwt: string 
 *               example:
 *                 jwt: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pam8ueml2a28uc3R1ZGVudDFAZ21haWwuY29tIiwicm9sZSI6InN0dWRlbnQiLCJpYXQiOjE2NjgwMDUzNzYsImV4cCI6MTY2ODAyNjk3Nn0.3jJMls7xWXD8VLYv1dx9qOcs2eIF_Cu99ImZiwtTJQo
 *       401:
 *         description: Unaothorized
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */