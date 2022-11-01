const express = require("express");
const database = require("./config/db-config");
const ProfessorRoute = require('./routes/professorRoutes');
const app = express();
const port = 3000;


database.authenticate()
	.then(() => {
	  	console.log(`Connection has been established successfully. ${database.config.database}`);

	})
	.catch((error) => {
	  	console.error('Unable to connect to the database: ', error);
	});



app.get('/', (req,res)=>{
    res.send("Hello world!");
});

app.use('/', ProfessorRoute);


app.listen(port, ()=>{
    console.log(`Express app is running on localhost:${port}`);
});

