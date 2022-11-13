const bcrypt = require('bcrypt');
const Student = require('../../models/studentModel');
const {STATUS_CODES} = require('../../constants');

const listAllStudents = async (req, res) => {
  try {
    const students = await Student.findAll({
      attributes: {exclude: ['password']},
    });
    res.status(STATUS_CODES.STATUS_OK).json(students);
  } catch (error) {
    res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(error.message);
  }
}

const findStudentByID = async (req, res) => {
  try {
    let ID = req.params.id;

    const student = await Student.findOne({
      where: {id: ID},
      attributes: {exclude: ['password']},
    });
    if (student) {
      if(req.userData.role=='student' && req.userData.id != ID)
        res.sendStatus(STATUS_CODES.FORBIDDEN);
        
      res.status(STATUS_CODES.STATUS_OK).json(student);
    } else {
      res.status(STATUS_CODES.NOT_FOUND).json({message: 'Student not found'});
    }
  } catch (error) {
    res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(error.message);
  }
}

const createStudent = async (req, res) => {
  try {
    const hash = bcrypt.hashSync(req.body.password, +process.env.BCRYPT_SALT_ROUNDS);
    const tempStudent = {
      name: req.body.name,
      surname: req.body.surname,
      email: req.body.email,
      //email: req.body.name.toLowerCase()+'.'
      password: hash,
    }
    const student = await Student.create(tempStudent);
    res.status(STATUS_CODES.STATUS_OK).json(student);
  } catch (error) {
    res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(error.message);
  }
}

const deleteStudent = async (req, res) => {

  try {
    let ID = req.params.id;
    const student = await Student.destroy({
      where: {id: ID},
    });
    if (student) {
      res.status(STATUS_CODES.STATUS_OK).json({message: 'Student deleted!'});
    } else {
      res.status(STATUS_CODES.NOT_FOUND).json({message: 'Student not found'});
    }
  } catch (error) {
    res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(error.message);
  }
}

const updateStudent = async (req, res) => {
  try {

    let ID = req.params.id;
    //const hash = bcrypt.hashSync(req.body.password, +process.env.BCRYPT_SALT_ROUNDS);
    // const student = await Student.update({
    //   name: req.body.name,
    //   surname: req.body.surname,
    //   email: req.body.email,
    //   password: hash,
    // }, {
    //   where: {id: ID},
    // });
    const student = await Student.findOne({
        where: {id: ID}
    });
    if (student) {
      //console.log(req.body);
      //console.log(student.name);
      if(req.userData.role=="student"){
        if(req.userData.id == ID){
          student.password = bcrypt.hashSync(req.body.password, +process.env.BCRYPT_SALT_ROUNDS);
        }
        else{
          res.sendStatus(STATUS_CODES.FORBIDDEN);
        }
      }
      else{
        student.name = req.body.name;
        student.surname = req.body.surname;
        student.password = bcrypt.hashSync(req.body.password, +process.env.BCRYPT_SALT_ROUNDS);
        student.email = req.body.email;
        //generisanje mejla posebno
      }
      await student.save();
      res.status(STATUS_CODES.STATUS_OK).json({message: 'Student updated!'});
    } else {
      res.status(STATUS_CODES.NOT_FOUND).json({message: 'Student not found'});
    }
  } catch (error) {
    console.log(error);
    res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(error.message);
  }
}

module.exports = {
  listAllStudents,
  findStudentByID,
  createStudent,
  deleteStudent,
  updateStudent,
}

