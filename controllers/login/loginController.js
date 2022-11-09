const Professor = require('../../models/professorModel');
const Student = require('../../models/studentModel');
const {STATUS_CODES} = require('../../constants');
const bcrypt = require('bcrypt');

const login = async(req,res) => {

    console.log(req.body.email);
    console.log(isProfessor(req.body.email));
    res.sendStatus(200);

}

const isProfessor = (email) => {


    //const result = email.search(/^[a-z]*$/.test(email))
    const str = "hello.world!";
    const result = /^[a-z]{2,}\.[a-z]{2,}\.[0-9]{4,}@gmail.com/.test(email);
    return result;

}

module.exports = {
    login,
}