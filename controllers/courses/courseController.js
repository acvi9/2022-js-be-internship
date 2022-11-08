const Course = require('../../models/courseModel');
const {STATUS_CODES} = require('../../constants');

const listAllCourses = async (req, res) => {
  try {
    const courses = await Course.findAll();
    res.status(STATUS_CODES.STATUS_OK).json({courses});
  } catch (error) {
    res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(error.message);
  }
}

const findByID = async (req, res) => {
  try {

    let ID = req.params.id;

    const course = await Course.findOne({
      where: {id: ID}
    });

    if(course){
      res.status(STATUS_CODES.STATUS_OK).json({course});
    }else
      res.status(STATUS_CODES.NOT_FOUND).json({message: 'Course not found'});
  } catch (error) {
    res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(error.message);
  }
}

const createCourse = async (req, res) => {

  try {

    const tempCourse = {
      name: req.body.name,
      description: req.body.description,
      espb: req.body.espb,
      professorId: req.body.professorId,
    }
    
    const course = await Course.create(tempCourse);
    res.status(STATUS_CODES.STATUS_OK).json(course);
  } catch (error) {
    res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(error.message);
  }
}

const deleteCourse = async (req, res) => {

  try {
    let ID = req.params.id;
    const course = await Course.destroy({
      where: {id: ID},
    });
    if (course) {
      res.status(STATUS_CODES.STATUS_OK).json({message: 'Course deleted!'});
    } else {
      res.status(STATUS_CODES.NOT_FOUND).json({message: 'Course not found'});
    }
  } catch (error) {
    res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(error.message);
  }
}

const updateCourse = async (req, res) => {

  try {

    let ID = req.params.id;
    
    const course = await Course.update({
      name: req.body.name,
      description: req.body.description,
      espb: req.body.espb,
      professorId: req.body.professorId,
    }, {
      where: {id: ID},
    });
    if (course) {
      res.status(STATUS_CODES.STATUS_OK).json({message: 'Course updated!'});
    } else {
      res.status(STATUS_CODES.NOT_FOUND).json({message: 'Course not found'});
    }
  } catch (error) {
    res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(error.message);
  }
}

module.exports = {
  listAllCourses,
  findByID,
  createCourse,
  deleteCourse,
  updateCourse
}