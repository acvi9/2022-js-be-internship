const Attendance = require('../../models/attendanceModel');
const Course = require('../../models/courseModel');
const Student = require('../../models/studentModel');
const {STATUS_CODES} = require('../../constants');

const createAttendance = async (req, res) => {
  try {
    const tempAttendance = {
      studentId: req.body.studentId,
      courseId: req.body.courseId,
    }
    const attendances = await Attendance.findAll();
    let exists = false;
    for(let a in attendances){
      if(tempAttendance ===a){
        exists = true;
      }
    }
    
    if(exists === false){
      res.status(STATUS_CODES.ALREADY_EXISTS).json({message: 'already exists'})
    }
    else{
      const attendance = await Attendance.create(tempAttendance);
      res.status(STATUS_CODES.STATUS_OK).json(attendance);
    }
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

    let studentNames = [];

    for (let i = 0; i < students.length; i++) {

      let studentName = await Student.findOne({
        where: {id: students[i].studentId},
        attributes: {exclude: ['password']},
      });

      studentNames.push(studentName);
    }

    res.status(STATUS_CODES.STATUS_OK).json(studentNames);
  } catch (error) {
    res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(error.message);
  }
}

const listCoursesOfStudent = async (req, res) => {
  try {
    let ID = req.params.id;

    if(req.userData.role=='student' && req.userData.id!=ID)
      return res.sendStatus(STATUS_CODES.FORBIDDEN);

    let courses = await Attendance.findAll({
      where: {studentId: ID}
    });

    //console.log(courses);

    let courseNames = [];

    for (let i = 0; i < courses.length; i++) {

      let courseName = await Course.findOne({
        where: {id: courses[i].courseId, }
      });
      //console.log(courseName);
      courseNames.push(courseName);

    }

    res.status(STATUS_CODES.STATUS_OK).json(courseNames);
  } catch (error) {
    res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(error.message);
  }
}

module.exports = {
  createAttendance,
  deleteAttendance,
  listStudentsOnCourse,
  listCoursesOfStudent
};