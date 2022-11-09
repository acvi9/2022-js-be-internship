const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const ProfessorRoute = require('./routes/professorRoutes');
const StudentRoute = require('./routes/studentRoutes.js');
const TermsRoute = require('./routes/termsRoutes');
const CourseRoute = require('./routes/courseRoutes');
app.use(express.urlencoded({extended:false}));
app.use(express.json())
const LoginRoute = require('./routes/loginRoutes')
const ExamRoute = require('./routes/examRoutes');


app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.use('/students', StudentRoute)
app.use('/professors', ProfessorRoute);
app.use('/terms', TermsRoute);
app.use('/courses', CourseRoute);
app.use('/exams', ExamRoute);

app.use('/login',LoginRoute);


module.exports = app