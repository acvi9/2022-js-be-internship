/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../app');
const {STATUS_CODES} = require('../../constants');
const mockedAttendanceData = require('../../models/__mocks__/mockedAttendanceData.json');

jest.mock('../../config/db-config');
jest.mock('../../models/studentModel');

describe('Attendance Controller', () => {

  describe('POST - Create a new attendance', () => {
    test('Should create a new attendance', async () => {
  
      let lastID = mockedAttendanceData[mockedAttendanceData.length - 1].id;
  
      let newAttendance = {
        'id': lastID + 1,
        'studentId': 1,
        'courseId': 1
      }
      const res = await request(app)
        .post('/attendance')
        .send(newAttendance);
  
      expect(res.statusCode).toBe(STATUS_CODES.STATUS_OK);
      expect(res.body).toHaveProperty('id');
      expect(res.body).toHaveProperty('studentId');
      expect(res.body).toHaveProperty('courseId');
    
    })
  });
  
  describe('DELETE - Delete an attendance', () => {
    test('Should delete an attendance with ID = 1', async () => {
  
      const res = await request(app)
        .delete('/attendance/1');
  
      expect(res.statusCode).toBe(STATUS_CODES.STATUS_OK);
      expect(res.body).toMatchObject({'message':'Attendance deleted!'});
    })
  })
  

})
  