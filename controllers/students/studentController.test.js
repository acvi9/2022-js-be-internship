const request = require('supertest');
const app = require('../../app');
const {STATUS_CODES} = require('../../constants');
const mockedStudentsData = require('../../models/__mocks__/mockedStudentsData.json');

// Mocking the database and the model
jest.mock('../../config/db-config');
jest.mock('../../models/studentModel');

// Initializing the server variable
let server;

beforeEach(async () => {
    server = app.listen(3000);
}); // Starts server before each test

afterEach(async () => {
    await server.close();
}); // Closes server after each test

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
        test('Should return a student with ID = 3', async () => {
            const res = await request(server)
            .get('/students/3');

            expect(res.statusCode).toBe(STATUS_CODES.STATUS_OK);
            expect(res.body).toMatchObject({"student":mockedStudentsData[2]});
        })
    });

    describe('POST - Create a new student', () => {
        test('Should create a new student', async () => {

            let newStudent = {
                "name": "Test Student",
                "surname": "Test Surname",
                "email": "test@mail.com",
                "password": "123456"
            }

            mockedStudentsData.push(newStudent);

            const res = await request(server)
            .post('/students')
            .send(newStudent);

            let lastItem = mockedStudentsData[mockedStudentsData.length - 1];

            expect(res.statusCode).toBe(STATUS_CODES.STATUS_OK);
            expect(lastItem.name).toBe(newStudent.name);
            expect(lastItem.surname).toBe(newStudent.surname);
            expect(lastItem.email).toBe(newStudent.email);
            expect(lastItem.password).toBe(newStudent.password);
            
        })
    });

});