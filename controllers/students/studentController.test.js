/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../app');
const mockedStudentsData = require('../../models/__mocks__/mockedStudentsData.json');
const {STATUS_CODES} = require('../../constants');
require('dotenv').config();
const {login} = require('../../utils/testingUtils');

jest.mock('../../config/db-config');
jest.mock('../../models/studentModel');
jest.mock('../../models/professorModel');

describe('Student Controller', () => {

  describe('GET - List All students', () => {
    test('Should return all students', async () => {

      const loginRes = await login("profa.profic1@gmail.com",'12345');

      const response = await request(app)
        .get('/students')
        .auth(loginRes.body.jwt, { type: 'bearer' });

      expect(response.statusCode).toBe(STATUS_CODES.STATUS_OK);
      expect(response.body).toMatchObject(mockedStudentsData);
    })
  });

  describe('GET - Find By ID', () => {
    test('Should return a student with ID = 3', async () => {

      const loginRes = await login("profa.profic1@gmail.com",'12345');

      const res = await request(app)
        .get('/students/1')
        .auth(loginRes.body.jwt, { type: 'bearer' });

      expect(res.statusCode).toBe(STATUS_CODES.STATUS_OK);
      expect(res.body).toMatchObject(mockedStudentsData[0]);
    })
  });

  describe('POST - Create a new student', () => {
    test('Should create a new student', async () => {

      const loginRes = await login("profa.profic1@gmail.com",'12345');

      let lastID = mockedStudentsData[mockedStudentsData.length - 1].id;

      let newStudent = {
        'id': lastID + 1,
        'name': 'Test Student',
        'surname': 'Test Surname',
        'email': 'test@mail.com',
        'password': '123456'
      }

      mockedStudentsData.push(newStudent);

      const res = await request(app)
        .post('/students')
        .auth(loginRes.body.jwt, { type: 'bearer' })
        .send(newStudent);

      let lastItem = mockedStudentsData[mockedStudentsData.length - 1];

      expect(res.statusCode).toBe(STATUS_CODES.STATUS_OK);
      expect(lastItem.name).toBe(newStudent.name);
      expect(lastItem.surname).toBe(newStudent.surname);
      expect(lastItem.email).toBe(newStudent.email);
      expect(lastItem.password).toBe(newStudent.password);
            
    })
  });

  describe('DELETE - Delete a student', () => {
    test('Should delete a student with ID = 1', async () => {

      const loginRes = await login("profa.profic1@gmail.com",'12345');

      const res = await request(app)
        .delete('/students/1')
        .auth(loginRes.body.jwt, { type: 'bearer' });

      expect(res.statusCode).toBe(STATUS_CODES.STATUS_OK);
      expect(res.body).toMatchObject({'message':'Student deleted!'});
    })
  })

  describe('PUT - Update a student', () => {
    test('Should update a student with ID = 3', async () => {

      const loginRes = await login("profa.profic1@gmail.com",'12345');

      let updatedStudent = {
        'id': 3,
        'name': 'Updated Student',
        'surname': 'Updated Surname',
        'email': 'update@gmail.com',
        'password': '123456'
      }

      const res = await request(app)
        .put(`/students/${updatedStudent.id}`)
        .auth(loginRes.body.jwt, { type: 'bearer' })
        .send(updatedStudent);

      expect(res.statusCode).toBe(STATUS_CODES.STATUS_OK);
      expect(res.body).toMatchObject({'message':'Student updated!'});
    })
  })

})
