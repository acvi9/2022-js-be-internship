const Terms = require('../../models/termsModel');
const {STATUS_CODES} = require('../../constants');

const listAllTerms = async (req, res) => {
  try {
    const terms = await Terms.findAll();
    res.status(STATUS_CODES.STATUS_OK).json({terms});
  } catch (error) {
    res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(error.message);
  }
}

const findTermByID = async (req, res) => {
  try {
    let ID = req.params.id;

    const terms = await Terms.findOne(
      {
        where: {id: ID}
      }
    );
    if (terms) {
      res.status(STATUS_CODES.STATUS_OK).json({terms});
    } else {
      res.status(STATUS_CODES.NOT_FOUND).json({message: 'Term not found'});
    }
  } catch (error) {
    res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(error.message);
  }
}

const createTerm = async (req, res) => {
  try {

    const tempTerm = {
      name: req.body.name,
      from: req.body.from,
      to: req.body.to
    }

    const term = await Terms.create(tempTerm);
    res.status(STATUS_CODES.STATUS_OK).json(term);
  } catch (error) {
    res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(error.message);
  }
}

const deleteTerm = async (req, res) => {
    
  try {
    let ID = req.params.id;
    const term = await Terms.destroy({
      where: {id: ID},
    });
    if (term) {
      res.status(STATUS_CODES.STATUS_OK).json({message: 'Term deleted!'});
    } else {
      res.status(STATUS_CODES.NOT_FOUND).json({message: 'Term not found'});
    }
  } catch (error) {
    res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(error.message);
  }
}


const updateTerm = async (req, res) => {
  try {
    let ID = req.params.id;
    const term = await Terms.update({
      name: req.body.name,
      from: req.body.from,
      to: req.body.to
    }, {
      where: {id: ID},
    });
    if (term) {
      res.status(STATUS_CODES.STATUS_OK).json({message: 'Term updated!'});
    } else {
      res.status(STATUS_CODES.NOT_FOUND).json({message: 'Term not found'});
    }
  } catch (error) {
    res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(error.message);
  }
}

module.exports = {
  listAllTerms, 
  findTermByID, 
  createTerm, 
  deleteTerm, 
  updateTerm
}
