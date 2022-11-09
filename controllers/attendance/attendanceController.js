const Attendance = require('../../models/attendanceModel');
const {STATUS_CODES} = require('../../constants');
//const Course = require('../courses/courseController');
const Student = require('../../models/studentModel');

const createAttendance = async (req, res) => {
  try {
    const tempAttendance = {
      studentId: req.body.studentId,
      courseId: req.body.courseId,
    }
    const attendance = await Attendance.create(tempAttendance);
    res.status(STATUS_CODES.STATUS_OK).json(attendance);
  } catch (error) {
    res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(error.message);
  }
}

const deleteAttendance = async (req, res) => {
  try {
    let ID = req.params.id;
    const attendance = await Attendance.destroy({
      where: {id: ID},
    });
    if (attendance) {
      res.status(STATUS_CODES.STATUS_OK).json({message: 'Attendance deleted!'});
    } else {
      res.status(STATUS_CODES.NOT_FOUND).json({message: 'Attendance not found'});
    }
  } catch (error) {
    res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(error.message);
  }
}

const listStudentsOnCourse = async (req, res) => {
  try {
    let ID = req.params.id;
    let students = await Attendance.findAll({
      where: {courseId: ID, }
    });

    res.status(STATUS_CODES.STATUS_OK).json({students});
  } catch (error) {
    res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(error.message);
  }
}

module.exports = {
  createAttendance,
  deleteAttendance,
  listStudentsOnCourse,
};