const Student = require('../../models/studentModel');
const {STATUS_CODES} = require('../../constants');
const listAllStudents = async (req, res) => {
    try {
        const students = await Student.findAll();
        res.status(STATUS_CODES.STATUS_OK).json({students});
    } catch (error) {
        res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(error.message);
    }
}

module.exports = {
    listAllStudents
}

