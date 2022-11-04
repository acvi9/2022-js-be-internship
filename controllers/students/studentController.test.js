const request = require('supertest');
const {studentMock} = require('./studentMock');
const {STATUS_CODES} = require('../../constants');
const app = require('../../app');
require('dotenv').config();
const host = process.env.DB_HOST
const server = app.listen(5001, host,()=>{

})

const mockStudentsModel = require('../../models/studentsMockModel');

console.log(mockStudentsModel)

describe('Student Controller', () => {

    test('Should test if the connection to the route is successful', async () => {
        await request(server)
        .get('/students')
        .then(data =>{
            expect(data.statusCode).toBe(STATUS_CODES.STATUS_OK);
        })
    });

    describe('GET - List All students', () => {
        test('Should return all students', async () => {
            await request(server)
            .get('/students')
            .then(data =>{
                expect(mockStudentsModel).toEqual(studentMock.listAll)
            })
        })
    });

    describe('GET - Find By ID', () => {
        test('Should return a student by ID', async () => {
            await request(server)
            .get('/students/1')
            .then(data =>{

                const student = data.body;
                expect(mockStudentsModel[0]).toEqual(studentMock.listAll[0])
            })
        })
    });
});