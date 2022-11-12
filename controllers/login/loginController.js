const Professor = require('../../models/professorModel');
const Student = require('../../models/studentModel');
const {STATUS_CODES} = require('../../constants');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {isStudent, generateToken, isProfessor} = require('../../utils/authenticationUtils')

const login = async(req,res) => {

    let model;
    if(isStudent(req.body.email))
        model = Student;
    else if(isProfessor(req.body.email))
        model = Professor;
    else
        return res.sendStatus(STATUS_CODES.NOT_FOUND);

    try {
        const user = await model.findOne({
        where: {email: req.body.email},
        }); 
        if(!user){
            return res.sendStatus(STATUS_CODES.NOT_FOUND);
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

module.exports = {
    login,
}