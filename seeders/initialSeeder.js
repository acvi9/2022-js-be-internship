const database = require('../config/db-config');
const Professor = require('../models/professorModel');
const Course = require('../models/courseModel');
const Student = require('../models/studentModel');
const Term = require('../models/termsModel');
const bcrypt = require('bcrypt');

database.sync()
  .then(()=>{
    return Professor.findOrCreate({
      where: {
        email: 'profa.profic1@gmail.com'
      },
      defaults:{
        name: 'Profa',
        surname: 'Profic',
        password: bcrypt.hashSync('12345', +process.env.BCRYPT_SALT_ROUNDS)
      }
    })})
  .then(async()=>{
    const profId = await Professor.findOne({
      where: {email:'profa.profic1@gmail.com'}
    });
    return profId.id
  })
  .then((id) =>{
    Course.findOrCreate({
      where: {name: 'Math'},
      defaults:{
        description: 'Learn Math',
        espb: 8,
        professorId: id
      }            
    })

  })
  .then(()=>{
    Student.findOrCreate({
      where : {email: 'student.studentic.student1@gmail.com'},
      defaults: {
        name: 'Student',
        surname: 'Studentic',
        password: bcrypt.hashSync('12345', +process.env.BCRYPT_SALT_ROUNDS)
      }
    })
  })
  .then(()=>{
    Term.findOrCreate({
      where:{name:'junski'},
      defaults:{
        from: '2022/06/13 16:30:59.786',
        to: '2022/06/23 16:30:59.786'
      }
    })
  })
  .catch((err)=>{
    console.log(err);
  });
