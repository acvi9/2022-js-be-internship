const bcrypt = require('bcrypt');
const Professor = require('../../models/professorModel');
const {STATUS_CODES} = require('../../constants');

const listAllProfessors = async (req, res) => {
  try {
    const professors = await Professor.findAll({
      attributes: {exclude: ['password']},
    });
    res.status(STATUS_CODES.STATUS_OK);
    res.json({professors});
  } catch (error) {
    res.status(STATUS_CODES.INTERNAL_SERVER_ERROR);
    res.json(error.message);
  }
}

const findProfessorByID = async (req, res) => {
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
    const hash = bcrypt.hashSync(req.body.password, +process.env.BCRYPT_SALT_ROUNDS);
    const tempProfessor = {
      name: req.body.name,
      surname: req.body.surname,
      email: req.body.email,
      password: hash,
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
    if(req.userData.id != ID)
      return res.sendStatus(STATUS_CODES.FORBIDDEN);
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
    if(req.userData.id != ID)
      return res.sendStatus(STATUS_CODES.FORBIDDEN);
    const hash = bcrypt.hashSync(req.body.password, +process.env.BCRYPT_SALT_ROUNDS);
    const professor = await Professor.update({
      name: req.body.name,
      surname: req.body.surname,
      email: req.body.email,
      password: hash,
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
  findProfessorByID,
  createProfessor,
  deleteProfessor,
  updateProfessor
}

