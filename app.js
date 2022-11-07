const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const ProfessorRoute = require('./routes/professorRoutes');
const StudentRoute = require('./routes/studentRoutes.js');
const TermsRoute = require('./routes/termsRoutes');
const CourseRoute = require('./routes/courseRoutes');

app.get('/', (req, res) => {
	res.send("Hello world!");
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/students', StudentRoute)
app.use('/professors', ProfessorRoute);
app.use('/terms', TermsRoute);
app.use('/courses', CourseRoute);


module.exports = app