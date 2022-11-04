const request = require('supertest');
const {STATUS_CODES} = require('../../constants');
const app = require('../../app');
const mockedStudentsData = require('../../models/__mocks__/mockedStudentsData.json');

jest.mock('../../config/db-config');
jest.mock('../../models/studentModel');


let server 
beforeEach(async () => {
    server = app.listen(3000);
})
afterEach(async () => {
    await server.close();
})
describe('Student Controller', () => {

    describe('GET - List All students', () => {
        test('Should return all students', async () => {
            const response = await request(server)
            .get('/students');

            expect(response.statusCode).toBe(STATUS_CODES.STATUS_OK);
            expect(response.body).toMatchObject({"students":mockedStudentsData});
        })
    });

    describe('GET - Find By ID', () => {
        test('Should return a student by ID', async () => {
            const res = await request(server)
            .get('/students/1');

            expect(res.statusCode).toBe(STATUS_CODES.STATUS_OK);
            //todo: Compare response.body with what we expect to receive here
        })
    });

});