const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Professor = require('../../models/professorModel');
const Student = require('../../models/studentModel');
const {STATUS_CODES} = require('../../constants');


const login = async(req,res) => {

  const model = isStudent(req.body.email) ? Student : Professor;
  try {
    const user = await model.findOne({
      where: {email: req.body.email},
    }); 
    if(!user){
      res.sendStatus(STATUS_CODES.NOT_FOUND);
      return;
    }
    const passwordCompared = bcrypt.compareSync(req.body.password.toString(),user.password);
    if(passwordCompared){
      const accessToken = generateToken(user.email,model.name);
      res.status(STATUS_CODES.STATUS_OK).json({'jwt':accessToken});
    } 
    else{
      res.sendStatus(STATUS_CODES.UNAUTHORIZED);
    } 
  } catch (error) {
    res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(error.message);
  }

}

const isStudent = (email) => {

  const result = /^[a-z]{2,}\.[a-z]{2,}\.student[0-9]+@gmail.com/.test(email);
  return result;

}

const generateToken = (email,role) => {

  const accessToken = jwt.sign({ email: email,  role: role }, process.env.JWT_SECRET_KEY, { expiresIn: '6h' });
  return accessToken;

}

module.exports = {
  login,
}