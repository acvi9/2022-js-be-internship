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

    const professor = await Professor.findOne({
      where: {id: ID},
      attributes: {exclude: ['password']},
    });
    if (professor) {
      res.status(STATUS_CODES.STATUS_OK).json({professor});
    } else {
      res.status(STATUS_CODES.NOT_FOUND).json({message: 'Professor not found'});
    }
  } catch (error) {
    res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(error.message);
  }
}

const createProfessor = async (req, res) => {
  try {

    const tempProfessor = {
      name: req.body.name,
      surname: req.body.surname,
      email: req.body.email,
      password: req.body.password,
    }

    const professor = await Professor.create(tempProfessor);
    res.status(STATUS_CODES.STATUS_OK).json(professor);
  } catch (error) {
    res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(error.message);
  }
}

const deleteProfessor = async (req, res) => {
    
  try {
    let ID = req.params.id;
    const professor = await Professor.destroy({
      where: {id: ID},
    });
    if (professor) {
      res.status(STATUS_CODES.STATUS_OK).json({message: 'Professor deleted!'});
    } else {
      res.status(STATUS_CODES.NOT_FOUND).json({message: 'Professor not found'});
    }
  } catch (error) {
    res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(error.message);
  }
}


const updateProfessor = async (req, res) => {
  try {
    let ID = req.params.id;
    const professor = await Professor.update({
      name: req.body.name,
      surname: req.body.surname,
      email: req.body.email,
      password: req.body.password,
    }, {
      where: {id: ID},
    });
    if (professor) {
      res.status(STATUS_CODES.STATUS_OK).json({message: 'Professor updated!'});
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
  createProfessor,
  deleteProfessor,
  updateProfessor
}

