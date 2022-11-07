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

const findByID = async (req, res) => {
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

module.exports = {
  listAllTerms, findByID
}
