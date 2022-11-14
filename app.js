const express = require('express');
const ProfessorRoute = require('./routes/professorRoutes');
const StudentRoute = require('./routes/studentRoutes.js');
const TermRoute = require('./routes/termsRoutes');
const CourseRoute = require('./routes/courseRoutes');
const AttendanceRoute = require('./routes/attendanceRoutes');
const ExamRoute = require('./routes/examRoutes');
const LoginRoute = require('./routes/loginRoutes')
const app = express()

app.use(express.urlencoded({extended:false}));
app.use(express.json())



app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.use('/students', StudentRoute)
app.use('/professors', ProfessorRoute);
app.use('/terms', TermRoute);
app.use('/courses', CourseRoute);
app.use('/attendance', AttendanceRoute);
app.use('/exams', ExamRoute);


app.use('/login',LoginRoute);


module.exports = app