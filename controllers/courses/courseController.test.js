/* eslint-disable no-undef */
const request = require('supertest');
const {STATUS_CODES} = require('../../constants');
const app = require('../../app');
const mockedCoursesData = require('../../models/__mocks__/mockedCoursesData.json');

jest.mock('../../config/db-config');
jest.mock('../../models/courseModel');


let server 
beforeEach(async () => {
    server = app.listen(3001);
})
afterEach(async () => {
    await server.close();
})
describe('Courses Controller', () => {

    describe('GET - List All courses', () => {
        test('Should return all courses', async () => {
            const response = await request(server)
            .get('/courses');

            expect(response.statusCode).toBe(STATUS_CODES.STATUS_OK);
            expect(response.body).toMatchObject({"courses":mockedCoursesData});
        })
    });

    describe('GET - Find By ID', () => {
        test('Should return a course by ID', async () => {
            const res = await request(server)
            .get('/courses/1');

            expect(res.statusCode).toBe(STATUS_CODES.STATUS_OK);
            expect(res.body).toMatchObject({"course":mockedCoursesData[0]})
        })
    });

    describe('POST - Create course', () => {
        test('Should return a course by ID', async () => {
            const newCourse = {
                "name": "SE 2",
                "description": "Software Engineering intermidiate concepts",
                "espb": 10,
                "professorId": 1
            }
            const res = await request(server)
            .post('/courses').send(newCourse);

            expect(res.statusCode).toBe(STATUS_CODES.STATUS_OK);
            expect(res.body).toMatchObject({"course":mockedCoursesData[0]})
        })
    });

});