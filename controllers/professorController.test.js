const request = require('supertest');
const {host,port} = require('../index');
const {professorMock} = require('./professorMock');
const {STATUS_CODES} = require('../constants');
const server = `${host}:${port}`;


describe('Professor Controller', () => {

    test('Should test if the connection to the route is successful', async () => {
        await request(server)
        .get('/professors')
        .then(data =>{
            expect(data.statusCode).toBe(STATUS_CODES.STATUS_OK);
        })
    });

    test('Should return all professors', async () => {
        await request(server)
        .get('/professors')
        .then(data =>{
            expect(data.body).toEqual(professorMock.listAll)
        })
    });
});