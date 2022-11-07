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

const findCourseById = async (req, res) => {
    try {
        const course = await Course.findOne({
            where: {
                id: req.params.courseId
            }
        });
        res.status(STATUS_CODES.STATUS_OK).json({course});
    } catch (error) {
        res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(error.message);
    }
}

const createCourse = async (req, res) => {
    try {
        const course = await Course.create(req.body);
        res.status(STATUS_CODES.STATUS_OK).json(course);
    } catch (error) {
        res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(error.message);
    }
}

const deleteCourse = async (req, res) => {
    try {
        const courses = await Course.destroy({
            where: {
                id: req.params.courseId
            }
        });
        res.sendStatus(STATUS_CODES.STATUS_OK);
    } catch (error) {
        res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(error.message);
    }
}

const updateCourse = async (req, res) => {
    try {
        const course = await Course.findOne({
            where: {
                id: req.params.courseId
            }
        });
        course.update(req.body);
        res.status(STATUS_CODES.STATUS_OK).json({course});
    } catch (error) {
        res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(error.message);
    }
}

module.exports = {
    listAllCourses,
    createCourse,
    deleteCourse,
    updateCourse,
    findCourseById
}