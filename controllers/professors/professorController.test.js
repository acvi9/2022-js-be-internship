const request = require('supertest');
const app = require('../../app');
const {STATUS_CODES} = require('../../constants');
const mockedProfessorsData = require('../../models/__mocks__/mockedProfessorsData.json');

// Mocking the database and the model
jest.mock('../../config/db-config');
jest.mock('../../models/professorModel');

// Initializing the server variable
let server;

beforeEach(async () => {
    server = app.listen(3000);
}); // Starts server before each test

afterEach(async () => {
    await server.close();
}); // Closes server after each test

describe('Professor Controller', () => {

    describe('GET - List All professors', () => {
        test('Should return all professors', async () => {
            const response = await request(server)
            .get('/professors');

            expect(response.statusCode).toBe(STATUS_CODES.STATUS_OK);
            expect(response.body).toMatchObject({"professors":mockedProfessorsData});
        })
    });

    describe('GET - Find By ID', () => {
        test('Should return a professor with ID = 3', async () => {
            const res = await request(server)
            .get('/professors/3');

            expect(res.statusCode).toBe(STATUS_CODES.STATUS_OK);
            expect(res.body).toMatchObject({"professor":mockedProfessorsData[2]});
        })
    });

});
