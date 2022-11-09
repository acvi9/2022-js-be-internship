/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../app');
const {STATUS_CODES} = require('../../constants');
const mockedExamData = require('../../models/__mocks__/mockedExamsData.json');

jest.mock('../../config/db-config');
jest.mock('../../models/examModel');

describe('Exam Controller', () => {

  describe('GET - List All exams', () => {
    test('Should return all exams', async () => {
      const response = await request(app)
        .get('/exams');
  
      expect(response.statusCode).toBe(STATUS_CODES.STATUS_OK);
      expect(response.body).toMatchObject({'exams':mockedExamData});
    })
  });
  
  describe('GET - Find By ID', () => {
    test('Should return a exam with ID = 1', async () => {
      const res = await request(app)
        .get('/exams/1');
  
      expect(res.statusCode).toBe(STATUS_CODES.STATUS_OK);
      expect(res.body).toMatchObject({'exams':mockedExamData[0]});
    })
  });

});