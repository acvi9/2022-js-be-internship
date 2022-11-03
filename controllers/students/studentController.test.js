const request = require('supertest');
const {host,port} = require('../index');
const {studentMock} = require('./professorMock');
const {STATUS_CODES} = require('../constants');
const server = `${host}:${port}`;

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