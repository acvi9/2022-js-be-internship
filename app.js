const express = require('express');
const app = express();
const ProfessorRoute = require('./routes/professorRoutes');
const StudentRoute = require('./routes/studentRoutes.js');
const TermsRoute = require('./routes/termsRoutes');
const CourseRoute = require('./routes/courseRoutes');

app.get('/', (req, res) => {
	res.send("Hello world!");
});


app.use('/students', StudentRoute)
app.use('/professors', ProfessorRoute);
app.use('/terms', TermsRoute);
app.use('/courses', CourseRoute);


module.exports = app