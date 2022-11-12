const Exam = require('../../models/examModel');
const Student = require('../../models/studentModel');
const Term = require('../../models/termsModel');
const {STATUS_CODES} = require('../../constants');

const listAllExams = async (req, res) => {
  try {
    const exams = await Exam.findAll({});
    res.status(STATUS_CODES.STATUS_OK).json({exams});
  } catch (error) {
    res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(error.message);
  }
}

const findExamByID = async (req, res) => {
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
      studentId: req.body.studentId,
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
      studentId: req.body.studentId,
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


const listStudentExams = async (req, res) => {
  try {
    let ID = req.params.id;

    const student = await Student.findOne({
      where: {id: ID, }
    });

    const exams = await Exam.findAll({
      where: {studentId: student.id},
      order: [['status', 'ASC']],
    })

    res.status(STATUS_CODES.STATUS_OK).json({exams});
  } catch (error) {
    res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(error.message);
  }
}

const examAnalytics = async (req, res) => {
  try {
    let ID = req.params.id;

    const term = await Term.findOne({
      where: {id: ID, }
    });

    const students = await Student.findAll()

    const failedExams = await Exam.findAll({
      where: {termId: ID, status: false}
    })

    const passedExams = await Exam.findAll({
      where: {termId: ID, status: true}
    })


    let exams = failedExams.length + passedExams.length;

    const analytics = {
      term: term.name,
      numExams: exams,
      numStudents: students.length,
      numPassed: passedExams.length,
      numFailed: failedExams.length,
      passRatio: `${Math.round(passedExams.length / exams * 100, 2)} %`,
      attemptRatio: `${Math.round(exams / students.length *100, 2)} %`,
    }

    res.status(STATUS_CODES.STATUS_OK).json({analytics});
  } catch (error) {
    res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(error.message);
  }
}


module.exports = {
  listStudentExams,
  listAllExams,
  findExamByID,
  createExam,
  updateExam,
  deleteExam,
  examAnalytics
}
  