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
            expect(res.body).toMatchObject(mockedCoursesData[0])
        })
    });

    describe('POST - Create course', () => {
        test('Should return created Course', async () => {
            const newCourse = {
                name: "SE 2",
                description: "Software Engineering intermidiate concepts",
                espb: 10,
                professorId: 1
            }
            const res = await request(server)
            .post('/courses').send(newCourse);

            //console.log(res.body)
            expect(res.statusCode).toBe(STATUS_CODES.STATUS_OK);
            // expect(res.body.name).toMatchObject(newCourse.name);
            expect(res.body.espb).toBe(newCourse.espb);
            expect(res.body.name).toBe(newCourse.name);
        })
    });

    describe('DELETE - Delete By ID', () => {
        test('Should delete a course by ID', async () => {
            const res = await request(server)
            .delete('/courses/3');

            expect(res.statusCode).toBe(STATUS_CODES.STATUS_OK);
            //expect(res.body).toMatchObject(mockedCoursesData[0])
        })
    });

    describe('PUT - Update course by Id', () => {
        test('Should return updated Course', async () => {
            const updatedCourse = {
                name: "Maths 2",
                description: "We all know what maths is, again",
                espb: 10,
                professorId: 1
            }
            const res = await request(server)
            .put('/courses/1').send(updatedCourse);

            console.log(res.body)
            expect(res.statusCode).toBe(STATUS_CODES.STATUS_OK);
            // expect(res.body.name).toMatchObject(newCourse.name);
            //expect(res.body.espb).toBe(updatedCourse.espb);
            //expect(res.body.name).toBe(updatedCourse.name);
        })
    });

});