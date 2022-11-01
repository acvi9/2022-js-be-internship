const Professor = require('../models/professorModel');

const listAllProfessors = async (req, res) => {
    try {
        const professors = await Professor.findAll();
        res.status(200).json({professors});
    } catch (error) {
        res.status(500).json(error.message);
    }
}

module.exports = {
    listAllProfessors
}

