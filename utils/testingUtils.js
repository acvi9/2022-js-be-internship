const request = require('supertest');
const app = require('../app')

const login = async (email,password) => {
    const loginRes = await request(app)
        .post('/login')
        .send({
          email,
          password
        });
    return loginRes;
}

module.exports = {
    login,
}