const express = require('express');
const app = express();
const ProfessorRoute = require('./routes/professorRoutes');
const TermsRoute = require('./routes/termsRoutes');

app.get('/', (req, res) => {
	res.send("Hello world!");
});


app.use('/', ProfessorRoute);
app.use('/', TermsRoute);


module.exports = app