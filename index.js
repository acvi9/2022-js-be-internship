const express = require("express");
const database = require("./config/db-config");
const ProfessorRoute = require('./routes/professorRoutes');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const app = express();
const port = 3000;

// Connecting to Database
database.authenticate()
	.then(() => {
		console.log(`Connection has been established successfully. ${database.config.database}`);

	})
	.catch((error) => {
		console.error('Unable to connect to the database: ', error);
	});



app.get('/', (req, res) => {
	res.send("Hello world!");
});


app.use('/', ProfessorRoute);


app.listen(port, () => {
	console.log(`Express app is running on localhost:${port}`);
});




const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "College Organization API",
			version: "1.0.0",
			description: "A simple Express College Organization API.",
		},
		servers: [
			{
				url: "http://localhost:3000",
			},
		],
	},
	apis: ["./index.js", "./models/professorModel.js", "./models/studentModel.js", "./models/courseModel.js", "./models/termsModel.js",
		"./routes/professorRoutes.js", "./routes/studentRoutes.js", "./routes/courseRoutes.js", "./routes/termsRoutes.js"],
}

const specs = swaggerJSDoc(options);
app.use("/docs", swaggerUI.serve, swaggerUI.setup(specs));

app.get('/swagger-example', (req, res) => {
	res.json({
		"id": "a0s9djaosa",
		"name": "name 1",
		"exampleNumber": 2
	});
});

module.exports = express();
