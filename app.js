const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const ProfessorRoute = require('./routes/professorRoutes');
const StudentRoute = require('./routes/studentRoutes.js');
const TermRoute = require('./routes/termsRoutes');
const CourseRoute = require('./routes/courseRoutes');
const AttendanceRoute = require('./routes/attendanceRoutes');
const ExamRoute = require('./routes/examRoutes');

app.use(express.urlencoded({extended:false}));
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/students', StudentRoute)
app.use('/professors', ProfessorRoute);
app.use('/terms', TermRoute);
app.use('/courses', CourseRoute);
app.use('/attendance', AttendanceRoute);
app.use('/exams', ExamRoute);


module.exports = app