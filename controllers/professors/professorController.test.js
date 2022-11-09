/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../app');
const {STATUS_CODES} = require('../../constants');
const mockedProfessorsData = require('../../models/__mocks__/mockedProfessorsData.json');

jest.mock('../../config/db-config');
jest.mock('../../models/professorModel');

describe('Professor Controller', () => {

  describe('GET - List All professors', () => {
    test('Should return all professors', async () => {
      const response = await request(app)
        .get('/professors');

      expect(response.statusCode).toBe(STATUS_CODES.STATUS_OK);
      expect(response.body).toMatchObject({'professors':mockedProfessorsData});
    })
  });

  describe('GET - Find By ID', () => {
    test('Should return a professor with ID = 3', async () => {
      const res = await request(app)
        .get('/professors/3');

      expect(res.statusCode).toBe(STATUS_CODES.STATUS_OK);
      expect(res.body).toMatchObject({'professor':mockedProfessorsData[2]});
    })
  });

  describe('POST - Create a new professor', () => {
    test('Should create a new professor', async () => {

      let lastID = mockedProfessorsData[mockedProfessorsData.length - 1].id;

      let newProf = {
        'id': lastID + 1,
        'name': 'Test Prof',
        'surname': 'Test Surname',
        'email': 'test@mail.com',
        'password': '123456'
      }

      mockedProfessorsData.push(newProf);

      const res = await request(app)
        .post('/professors')
        .send(newProf);

      let lastItem = mockedProfessorsData[mockedProfessorsData.length - 1];

      expect(res.statusCode).toBe(STATUS_CODES.STATUS_OK);
      expect(lastItem.name).toBe(newProf.name);
      expect(lastItem.surname).toBe(newProf.surname);
      expect(lastItem.email).toBe(newProf.email);
      expect(lastItem.password).toBe(newProf.password);
            
    })
  });

  describe('DELETE - Delete a professor', () => {
    test('Should delete a professor with ID = 3', async () => {

      const res = await request(app)
        .delete('/professors/3');

      expect(res.statusCode).toBe(STATUS_CODES.STATUS_OK);
      expect(res.body).toMatchObject({'message':'Professor deleted!'});
    })
  })

  describe('PUT - Update a professor', () => {
    test('Should update a professor with ID = 3', async () => {

      let updatedProf = {
        'id': 3,
        'name': 'Updated Prof',
        'surname': 'Updated Surname',
        'email': 'update@gmail.com',
        'password': '123456'
      }

      const res = await request(app)
        .put(`/professors/${updatedProf.id}`)
        .send({
          'message': 'Professor updated!',
        });

      expect(res.statusCode).toBe(STATUS_CODES.STATUS_OK);
      expect(res.body).toMatchObject({'message':'Professor updated!'})
    })
  })

});