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

const findCourseByID = async (req, res) => {
  try {

    let ID = req.params.id;

    console.log("by id");

    const course = await Course.findOne({
      where: {id: ID}
    });

    if(course){
      res.status(STATUS_CODES.STATUS_OK).json(course);
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
    const course = await Course.findOne({
      where: {id: ID}
    });
    if (course) {
      // console.log(req.userData.id);
      // console.log(course.professorId);
      if(req.userData.id == course.professorId){
        await Course.destroy({
          where: {id: ID}
        });
        res.status(STATUS_CODES.STATUS_OK).json({message: 'Course deleted!'});
      }
      else{
        res.sendStatus(STATUS_CODES.FORBIDDEN);
      }
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
    const course = await Course.findOne({
      where: {id: ID}
    });
    if (course) {
      //console.log(req.userData.id);
      //console.log(course.professorId);
      if(req.userData.id == course.professorId){
        await Course.update({
          name: req.body.name,
          description: req.body.description,
          espb: req.body.espb,
          professorId: req.body.professorId,
        }, {
          where: {id: ID},
        });
        res.status(STATUS_CODES.STATUS_OK).json({message:"Course updated!"});
      }
      else{
        res.sendStatus(STATUS_CODES.FORBIDDEN);
      }
    } else {
      res.status(STATUS_CODES.NOT_FOUND).json({message: 'Course not found'});
    }
  } catch (error) {
    res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(error.message);
  }
}

module.exports = {
  listAllCourses,
  findCourseByID,
  createCourse,
  deleteCourse,
  updateCourse
}

//   try {

//     let ID = req.params.id;
    
//     const course = await Course.update({
//       name: req.body.name,
//       description: req.body.description,
//       espb: req.body.espb,
//       professorId: req.body.professorId,
//     }, {
//       where: {id: ID},
//     });
//     if (course) {
//       res.status(STATUS_CODES.STATUS_OK).json({message: 'Course updated!'});
//     } else {
//       res.status(STATUS_CODES.NOT_FOUND).json({message: 'Course not found'});
//     }
//   } catch (error) {
//     res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(error.message);
//   }