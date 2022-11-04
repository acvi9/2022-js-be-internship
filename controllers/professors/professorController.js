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

const findByID = async (req, res) => {
    try {
        let ID = req.params.id;

        const student = await Professor.findOne({
            where: {id: ID},
            attributes: {exclude: ['password']},
        });
        if (student) {
            res.status(STATUS_CODES.STATUS_OK).json({student});
        } else {
            res.status(STATUS_CODES.NOT_FOUND).json({message: 'Professor not found'});
        }
    } catch (error) {
        res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(error.message);
    }
}

module.exports = {
    listAllProfessors,
    findByID,
}

