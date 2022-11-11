/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../app');
const mockedCoursesData = require('../../models/__mocks__/mockedCoursesData.json');
const {STATUS_CODES} = require('../../constants');

jest.mock('../../config/db-config');
jest.mock('../../models/courseModel');

describe('Courses Controller', () => {

  describe('GET - List All courses', () => {
    test('Should return all courses', async () => {
      const response = await request(app)
        .get('/courses');
    
      expect(response.statusCode).toBe(STATUS_CODES.STATUS_OK);
      expect(response.body).toMatchObject({'courses':mockedCoursesData});
    })
  });

  describe('GET - Find By ID', () => {
    test('Should return a course with ID = 1', async () => {
      const res = await request(app)
        .get('/courses/1');

      expect(res.statusCode).toBe(STATUS_CODES.STATUS_OK);
      expect(res.body).toMatchObject({'course':mockedCoursesData[0]});
    })
  });

  describe('POST - Create a new course', () => {
    test('Should create a new course', async () => {

      let lastID = mockedCoursesData[mockedCoursesData.length - 1].id;

      let newCourse = {
        'id': lastID + 1,
        'name': 'Applied Calculus',
        'description': 'AP math course.',
        'espb': 10,
        'professorId': 1
      }

      mockedCoursesData.push(newCourse);

      const res = await request(app)
        .post('/courses')
        .send(newCourse);

      let lastItem = mockedCoursesData[mockedCoursesData.length - 1];

      expect(res.statusCode).toBe(STATUS_CODES.STATUS_OK);
      expect(lastItem.name).toBe(newCourse.name);
      expect(lastItem.description).toBe(newCourse.description);
      expect(lastItem.espb).toBe(newCourse.espb);
      expect(lastItem.professorId).toBe(newCourse.professorId);
            
    })
  });

  describe('DELETE - Delete a course', () => {
    test('Should delete a course with ID = 3', async () => {

      const res = await request(app)
        .delete('/courses/3');

      expect(res.statusCode).toBe(STATUS_CODES.STATUS_OK);
      expect(res.body).toMatchObject({'message':'Course deleted!'});
    })
  })

  describe('PUT - Update a course', () => {
    test('Should update a course with ID = 3', async () => {

      let updatedCourse = {
        'id': 3,
        'name': 'Software Testing',
        'description': 'Application testing for Software Engineering.',
        'espb': 8,
        'professorId': 1
      }

      const res = await request(app)
        .put(`/courses/${updatedCourse.id}`)
        .send({
          'message': 'Course updated!',
        });

      expect(res.statusCode).toBe(STATUS_CODES.STATUS_OK);
      expect(res.body).toMatchObject({'message':'Course updated!'})
    })
  })

});
