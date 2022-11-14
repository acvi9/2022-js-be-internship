/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../app');
const mockedAttendanceData = require('../../models/__mocks__/mockedAttendanceData.json');
const mockedStudentData = require('../../models/__mocks__/mockedStudentsData.json');
const mockedCoursesData = require('../../models/__mocks__/mockedCoursesData.json');
const {STATUS_CODES} = require('../../constants');
require('dotenv').config();
const {login} = require('../../utils/testingUtils');

jest.mock('../../config/db-config');
jest.mock('../../models/attendanceModel');
jest.mock('../../models/studentModel');
jest.mock('../../models/courseModel');
jest.mock('../../models/professorModel');

describe('Attendance Controller', () => {


  describe('POST - Create a new attendance', () => {
    test('Should create a new attendance', async () => {
  
      const loginRes = await login('profa.profic1@gmail.com','12345');
      let lastID = mockedAttendanceData[mockedAttendanceData.length - 1].id;
  
      let newAttendance = {
        'id': lastID + 1,
        'studentId': 1,
        'courseId': 3
      }
      const res = await request(app)
        .post('/attendance')
        .auth(loginRes.body.jwt, { type: 'bearer' })
        .send(newAttendance);
  
      expect(res.statusCode).toBe(STATUS_CODES.STATUS_OK);
      expect(res.body).toHaveProperty('id');
      expect(res.body).toHaveProperty('studentId');
      expect(res.body).toHaveProperty('courseId');
    
    })
  });
  
  describe('DELETE - Delete an attendance', () => {
    test('Should delete an attendance with ID = 1', async () => {
  
      const loginRes = await login('profa.profic1@gmail.com','12345');
      const res = await request(app)
        .delete('/attendance/1')
        .auth(loginRes.body.jwt, { type: 'bearer' });
  
      expect(res.statusCode).toBe(STATUS_CODES.STATUS_OK);
      expect(res.body).toMatchObject({'message':'Attendance deleted!'});
    })
  })
  


  describe('GET - All students taking a course', () => {
    test('Should return a list of students taking a course', async () => {

      const loginRes = await login('profa.profic1@gmail.com','12345');

      const response = await request(app)
        .get('/attendance/course/1')
        .auth(loginRes.body.jwt, { type: 'bearer' });

      //console.log(response.body);

      expect(response.status).toBe(STATUS_CODES.STATUS_OK);
      expect(response.body[0]).toEqual(mockedStudentData[0]);
    })

  });

  describe('GET - All courses taken by a student', () => {
    test('Should return a list of courses taken by a student', async () => {

      const loginRes = await login('profa.profic1@gmail.com','12345');

      const response = await request(app)
        .get('/attendance/student/1')
        .auth(loginRes.body.jwt, { type: 'bearer' });

      console.log(response.body);
      expect(response.status).toBe(STATUS_CODES.STATUS_OK);
      expect(response.body[0]).toEqual(mockedCoursesData[0]);
    })

  });

  

})
  