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

module.exports = {
    listAllTerms
}
