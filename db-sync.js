const database = require('./config/db-config');
const Professor = require('./models/professorModel');
const Course = require('./models/courseModel');

Professor.hasMany(Course);

database.sync({alter:true})
  .then(()=>{
    console.log('Models created!');
  }).catch((err)=>{
    console.log(err);
  });