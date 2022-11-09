const Exam = require('../../models/examModel');
const {STATUS_CODES} = require('../../constants');

const listAllExams = async (req, res) => {
  try {
    const exams = await Exam.findAll({});
    res.status(STATUS_CODES.STATUS_OK).json({exams});
  } catch (error) {
    res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(error.message);
  }
}

const findByID = async (req, res) => {
  try {
    let ID = req.params.id;
  
    const exam = await Exam.findOne({
      where: {id: ID}
    });
    if (exam) {
      res.status(STATUS_CODES.STATUS_OK).json({exam});
    } else {
      res.status(STATUS_CODES.NOT_FOUND).json({message: 'Exam not found'});
    }
  } catch (error) {
    res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(error.message);
  }
}

const createExam = async (req, res) => {
  try {

    const tempExam = {
      date_time: req.body.date_time,
      status: req.body.status,
      points: req.body.points,
      professorId: req.body.professorId,
      courseId: req.body.courseId,
      termId: req.body.termId,
    }
    const exam = await Exam.create(tempExam);
    res.status(STATUS_CODES.STATUS_OK).json(exam);
  } catch (error) {
    res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(error.message);
  }
}

const deleteExam = async (req, res) => {

  try {
    let ID = req.params.id;
    const exam = await Exam.destroy({
      where: {id: ID},
    });
    if (exam) {
      res.status(STATUS_CODES.STATUS_OK).json({message: 'Exam deleted!'});
    } else {
      res.status(STATUS_CODES.NOT_FOUND).json({message: 'Exam not found'});
    }
  } catch (error) {
    res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(error.message);
  }
}

const updateExam = async (req, res) => {
  try {

    let ID = req.params.id;

    const exam = await Exam.update({
      date_time: req.body.date_time,
      status: req.body.status,
      points: req.body.points,
      professorId: req.body.professorId,
      courseId: req.body.courseId,
      termId: req.body.termId,
      
    }, {
      where: {id: ID},
    });

    if (exam) {
      res.status(STATUS_CODES.STATUS_OK).json({message: 'Exam updated!'});
    } else {
      res.status(STATUS_CODES.NOT_FOUND).json({message: 'Exam not found'});
    }
  } catch (error) {
    res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(error.message);
  }
}

module.exports = {
  listAllExams,
  findByID,
  createExam,
  updateExam,
  deleteExam
}
  