const bcrypt = require('bcrypt');
const Student = require('../../models/studentModel');
const {STATUS_CODES} = require('../../constants');

const listAllStudents = async (req, res) => {
  try {
    const students = await Student.findAll({
      attributes: {exclude: ['password']},
    });
    res.status(STATUS_CODES.STATUS_OK).json({students});
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
      res.status(STATUS_CODES.STATUS_OK).json({student});
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
    const hash = bcrypt.hashSync(req.body.password, +process.env.BCRYPT_SALT_ROUNDS);
    const student = await Student.update({
      name: req.body.name,
      surname: req.body.surname,
      email: req.body.email,
      password: hash,
    }, {
      where: {id: ID},
    });

    if (student) {
      res.status(STATUS_CODES.STATUS_OK).json({message: 'Student updated!'});
    } else {
      res.status(STATUS_CODES.NOT_FOUND).json({message: 'Student not found'});
    }
  } catch (error) {
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

