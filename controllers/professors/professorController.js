const Professor = require('../../models/professorModel');
const {STATUS_CODES} = require('../../constants');

const listAllProfessors = async (req, res) => {
    try {
        const professors = await Professor.findAll({
            attributes: {exclude: ['password']},
        });
        res.status(STATUS_CODES.STATUS_OK).json({professors});
    } catch (error) {
        res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(error.message);
    }
}

module.exports = {
    listAllProfessors
}

