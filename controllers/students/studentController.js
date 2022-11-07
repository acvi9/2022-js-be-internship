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

const findByID = async (req, res) => {
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

    const tempStudent = {
      name: req.body.name,
      surname: req.body.surname,
      email: req.body.email,
      password: req.body.password,
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

    const student = await Student.update({
      name: req.body.name,
      surname: req.body.surname,
      email: req.body.email,
      password: req.body.password,
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
  findByID,
  createStudent,
  deleteStudent,
  updateStudent,
}

