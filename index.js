const express = require("express");
const app = express();
const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')
const port = 3000;

const options = {
    definition: {
		openapi: "3.0.0",
		info: {
			title: "Library API",
			version: "1.0.0",
			description: "A simple Express Library API",
		},
		servers: [
			{
				url: "http://localhost:3000",
			},
		],
	},
    apis: ["./index.js"],
}

const specs = swaggerJSDoc(options);
app.use("/docs", swaggerUI.serve, swaggerUI.setup(specs));


/**
 * @openapi
 * tags:
 *   name: Example
 *   description: Quick example for swagger
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Example:
 *       type: object
 *       required:
 *         - name
 *         - author
 *       properties:
 *         id:
 *           type: string
 *           description: Example id
 *           example: d5fE_asz
 *         name:
 *           type: string
 *           description: Example name
 *           example: Example 2
 *         exampleNumber:
 *           type: number
 *           description: Example number
 *           example: 3
 */

/**
 * @openapi
 * /swagger-example:
 *   get:
 *     summary: Just a simple swagger example
 *     tags: [Example]
 *     responses:
 *       200:
 *         description: Example returned
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Example'
 *               example:
 *                 id: d5fE_asz
 *                 name: Example 1
 *                 exampleNumber: 5
 *       500:
 *         description: Server error
 */
app.get('/swagger-example', (req,res)=>{
    res.json({
        "id" : "a0s9djaosa",
        "name": "name 1",
        "exampleNumber": 2
    });
});


app.get('/', (req,res)=>{
    res.send("Hello world!");
});

app.listen(port, ()=>{
    console.log(`Express app is running on localhost:${port}`);
});

