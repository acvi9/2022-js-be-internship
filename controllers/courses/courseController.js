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

module.exports = {
  listAllCourses
}