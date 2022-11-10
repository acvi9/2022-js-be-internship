/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../app');
const {STATUS_CODES} = require('../../constants');
const mockedAttendanceData = require('../../models/__mocks__/mockedAttendanceData.json');
const mockedStudentData = require('../../models/__mocks__/mockedStudentsData.json');
const mockedCoursesData = require('../../models/__mocks__/mockedCoursesData.json');

jest.mock('../../config/db-config');
jest.mock('../../models/studentModel');
jest.mock('../../models/courseModel');

describe('Attendance Controller', () => {

  describe('GET - All students taking a course', () => {
    test('Should return a list of students taking a course', async () => {
      const response = await request(app)
        .get('/attendance/course/1');

      expect(response.status).toBe(STATUS_CODES.STATUS_OK);
      expect(response.body.studentNames[0]).toEqual(mockedStudentData[2]);
    })

  });

  describe('GET - All courses taken by a student', () => {
    test('Should return a list of courses taken by a student', async () => {
      const response = await request(app)
        .get('/attendance/student/1');

      expect(response.status).toBe(STATUS_CODES.STATUS_OK);
      expect(response.body.courseNames[0]).toEqual(mockedCoursesData[0]);
    })

  });

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
  