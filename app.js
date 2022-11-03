const express = require('express');
const app = express();
const ProfessorRoute = require('./routes/professorRoutes');
const StudentRoute = require('./routes/studentRoutes.js');
const TermsRoute = require('./routes/termsRoutes');

app.get('/', (req, res) => {
	res.send("Hello world!");
});


app.use('/students', StudentRoute)
app.use('/professors', ProfessorRoute);
app.use('/terms', TermsRoute);


module.exports = app