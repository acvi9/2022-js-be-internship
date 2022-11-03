const request = require('supertest');
const {studentMock} = require('./studentMock');
const {STATUS_CODES} = require('../../constants');
const app = require('../../app');
require('dotenv').config();
const host = process.env.DB_HOST
const server = app.listen(5001, host,()=>{

})

describe('Student Controller', () => {

    test('Should test if the connection to the route is successful', async () => {
        await request(server)
        .get('/students')
        .then(data =>{
            expect(data.statusCode).toBe(STATUS_CODES.STATUS_OK);
        })
    });

    test('Should return all students', async () => {
        await request(server)
        .get('/students')
        .then(data =>{
            expect(data.body).toEqual(studentMock.listAll)
        })
    });
});