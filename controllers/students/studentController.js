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
            res.status(STATUS_CODES.CLIENT_ERROR).json({message: 'Student not found'});
        }
    } catch (error) {
        res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(error.message);
    }
}

module.exports = {
    listAllStudents,
    findByID,
}

