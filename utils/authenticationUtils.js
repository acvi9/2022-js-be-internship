const jwt = require('jsonwebtoken');


const isStudent = (email) => {

    const result = /^[a-z]{2,}\.[a-z]{2,}\.student[0-9]+@gmail.com/.test(email);
    return result;

}

const isProfessor = (email) => {

    const result = /^[a-z]{2,}\.[a-z]{2,}[0-9]+@gmail.com/.test(email);
    return result;

}

const generateToken = (email,role) => {

    const accessToken = jwt.sign({ email: email,  role: role }, process.env.JWT_SECRET_KEY, { expiresIn: '6h' });
    return accessToken;

}

module.exports = {
    isStudent,
    generateToken,
    isProfessor
}