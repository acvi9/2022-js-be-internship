/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../app');
const {STATUS_CODES} = require('../../constants');
const mockedExamsData = require('../../models/__mocks__/mockedExamsData.json');

jest.mock('../../config/db-config');
jest.mock('../../models/examModel');

describe('Exam Controller', () => {

  describe('GET - List All exams', () => {
    test('Should return all exams', async () => {
      const response = await request(app)
        .get('/exams');
  
      expect(response.statusCode).toBe(STATUS_CODES.STATUS_OK);
      expect(response.body).toMatchObject({'exams':mockedExamsData});
    })
  });
  
  describe('GET - Find By ID', () => {
    test('Should return a exam with ID = 1', async () => {
      const res = await request(app)
        .get('/exams/1');
  
      expect(res.statusCode).toBe(STATUS_CODES.STATUS_OK);
      expect(res.body).toMatchObject({'exams':mockedExamsData[0]});
    })
  });
  describe('POST - Create a new exam', () => {
    test('Should create a new exam', async () => {

      let lastID = mockedExamsData[mockedExamsData.length - 1].id;

      let newExam = {
        'id': lastID + 1,
        'date_time': '2022-01-01 00:00:00',
        'status': true,
        'points': 100,
        'professorId': 1,
        'courseId': 1,
        'termId': 1,
      }

      mockedExamsData.push(newExam);

      const res = await request(app)
        .post('/exams')
        .send(newExam);

      let lastItem = mockedExamsData[mockedExamsData.length - 1];

      expect(res.statusCode).toBe(STATUS_CODES.STATUS_OK);
      expect(lastItem.date_time).toBe(newExam.date_time);
      expect(lastItem.status).toBe(newExam.status);
      expect(lastItem.points).toBe(newExam.points);
      expect(lastItem.professorId).toBe(newExam.professorId);
      expect(lastItem.courseId).toBe(newExam.courseId);
      expect(lastItem.termId).toBe(newExam.termId);
            
    })
  });

  describe('DELETE - Delete an exam', () => {
    test('Should delete an exam with ID = 3', async () => {

      const res = await request(app)
        .delete('/exams/3');

      expect(res.statusCode).toBe(STATUS_CODES.STATUS_OK);
      expect(res.body).toMatchObject({'message':'Exam deleted!'});
    })
  })

  describe('PUT - Update an exam', () => {
    test('Should update an exam with ID = 1', async () => {

      let updateExam = {
        'id': 1,
        'date_time': '2022-01-01 00:00:00',
        'status': true,
        'points': 100,
        'professorId': 1,
        'courseId': 1,
        'termId': 1,
      }

      const res = await request(app)
        .put(`/exams/${updateExam.id}`)
        .send({
          'message': 'Exam updated!',
        });

      expect(res.statusCode).toBe(STATUS_CODES.STATUS_OK);
      expect(res.body).toMatchObject({'message':'Exam updated!'});
    })
  })

});