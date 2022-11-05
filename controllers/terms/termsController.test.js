const request = require('supertest');
const app = require('../../app');
const {STATUS_CODES} = require('../../constants');
const mockedTermsData = require('../../models/__mocks__/mockedTermsData.json');

// Mocking the database and the model
jest.mock('../../config/db-config');
jest.mock('../../models/termsModel.js');

// Initializing the server variable
let server;

beforeEach(async () => {
    server = app.listen(3000);
}); // Starts server before each test

afterEach(async () => {
    await server.close();
}); // Closes server after each test

describe('Terms Controller', () => {

    describe('GET - List All terms', () => {
        test('Should return all tests', async () => {
            const response = await request(server)
            .get('/terms');

            expect(response.statusCode).toBe(STATUS_CODES.STATUS_OK);
            expect(response.body).toMatchObject({"terms":mockedTermsData});
        })
    });

    describe('GET - Find By ID', () => {
        test('Should return a term with ID = 1', async () => {
            const res = await request(server)
            .get('/terms/1');

            expect(res.statusCode).toBe(STATUS_CODES.STATUS_OK);
            expect(res.body).toMatchObject({"terms":mockedTermsData[1]});
        })
    });

});