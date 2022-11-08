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
        if(course)
            res.status(STATUS_CODES.STATUS_OK).json(course);
        else
            res.sendStatus(STATUS_CODES.NOT_FOUND);
    } catch (error) {
        res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(error.message);
    }
}

const createCourse = async (req, res) => {
    try {
        const {name, description, espb, professorId} = req.body; 
        const course = await Course.create({name, description, espb, professorId});
        res.status(STATUS_CODES.STATUS_OK).json(course);
    } catch (error) {
        res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(error.message);
    }
}

const deleteCourse = async (req, res) => {
    try {
        const course = await Course.destroy({
            where: {
                id: req.params.courseId
            }
        });
        if(course)
            res.sendStatus(STATUS_CODES.STATUS_OK);
        else
            res.sendStatus(STATUS_CODES.NOT_FOUND);
    } catch (error) {
        res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(error.message);
    }
}

// const updateCourse = async (req, res) => {
//     try {
//         const course = await Course.findOne({
//             where: {
//                 id: req.params.courseId
//             }
//         });
//         if(course)
//         {
//             const {name, description, espb, professorId} = req.body;
//             const updatedCourse = await course.update({name, description, espb, professorId});
//             res.status(STATUS_CODES.STATUS_OK).json(updatedCourse);
//             console.log(updatedCourse);
//         }
//         else
//             res.sendStatus(STATUS_CODES.NOT_FOUND);
//     } catch (error) {
//         res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(error.message);
//     }
// }

const updateCourse = async (req, res) => {
    try {
        const {name, description, espb, professorId} = req.body;
        const course = await Course.update(
            {name, description, espb, professorId},
            {
                where: {id: req.params.courseId}
            }
        );
        if(course)
        {
            res.sendStatus(STATUS_CODES.STATUS_OK);
        }
        else
            res.sendStatus(STATUS_CODES.NOT_FOUND);
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