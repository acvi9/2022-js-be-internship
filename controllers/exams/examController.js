const Exam = require('../../models/examModel');
const {STATUS_CODES} = require('../../constants');

const listAllExams = async (req, res) => {
  try {
    const exams = await Exam.findAll({});
    res.status(STATUS_CODES.STATUS_OK).json({exams});
  } catch (error) {
    res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(error.message);
  }
}

const findByID = async (req, res) => {
  try {
    let ID = req.params.id;
  
    const exam = await Exam.findOne({
      where: {id: ID}
    });
    if (exam) {
      res.status(STATUS_CODES.STATUS_OK).json({exam});
    } else {
      res.status(STATUS_CODES.NOT_FOUND).json({message: 'Exam not found'});
    }
  } catch (error) {
    res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(error.message);
  }
}


module.exports = {
  listAllExams,
  findByID,
}
  