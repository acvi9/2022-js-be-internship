const database = require('./config/db-config');
const Professor = require('./models/professorModel');
const Course = require('./models/courseModel');
const Student = require('./models/studentModel');
const Terms = require('./models/termsModel');
const Exam = require('./models/examModel');

Professor.hasMany(Course);
Student.hasMany(Exam);
Terms.hasMany(Exam);
Course.hasMany(Exam);


database.sync({alter:true})
  .then(()=>{
    console.log('Models created!');
  }).catch((err)=>{
    console.log(err);
  });