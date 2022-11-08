/* eslint-disable no-undef */
// const request = require('supertest');
// const app = require('../../app');
const {STATUS_CODES} = require('../../constants');
const mockedProfessorsData = require('../../models/__mocks__/mockedProfessorsData.json');
const { listAllProfessors } = require('./professorController');


// Mocking the database and the model
jest.mock('../../config/db-config');
jest.mock('../../models/professorModel');

// Initializing the server variable
// let server;

describe('Professor Controller', () => {
  
  // beforeAll(async () => {
  //   server = app.listen(3000);
  // }); // Starts server before each test
  
  // afterAll(async () => {
  //   await server.close();
  // }); // Closes server after each test

  describe('GET - List All professors', () => {
    test('Should return all professors', async () => {
      
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
      };

      await listAllProfessors(null, res);

      expect(res.status).toHaveBeenCalledWith(STATUS_CODES.STATUS_OK);
      expect(res.json).toHaveBeenCalledWith({professors: mockedProfessorsData});
      expect(res.status).toHaveBeenCalledTimes(1);
      expect(res.json).toHaveBeenCalledTimes(1);
    })
  });

  // describe('GET - Find By ID', () => {
  //   test('Should return a professor with ID = 3', async () => {
  //     const res = await request(server)
  //       .get('/professors/3');

  //     expect(res.statusCode).toBe(STATUS_CODES.STATUS_OK);
  //     expect(res.body).toMatchObject({'professor':mockedProfessorsData[2]});
  //   })
  // });

  // describe('POST - Create a new professor', () => {
  //   test('Should create a new professor', async () => {

  //     let lastID = mockedProfessorsData[mockedProfessorsData.length - 1].id;

  //     let newProf = {
  //       'id': lastID + 1,
  //       'name': 'Test Prof',
  //       'surname': 'Test Surname',
  //       'email': 'test@mail.com',
  //       'password': '123456'
  //     }

  //     mockedProfessorsData.push(newProf);

  //     const res = await request(server)
  //       .post('/professors')
  //       .send(newProf);

  //     let lastItem = mockedProfessorsData[mockedProfessorsData.length - 1];

  //     expect(res.statusCode).toBe(STATUS_CODES.STATUS_OK);
  //     expect(lastItem.name).toBe(newProf.name);
  //     expect(lastItem.surname).toBe(newProf.surname);
  //     expect(lastItem.email).toBe(newProf.email);
  //     expect(lastItem.password).toBe(newProf.password);
            
  //   })
  // });

  // describe('DELETE - Delete a professor', () => {
  //   test('Should delete a professor with ID = 3', async () => {

  //     const res = await request(server)
  //       .delete('/professors/3');

  //     expect(res.statusCode).toBe(STATUS_CODES.STATUS_OK);
  //     expect(res.body).toMatchObject({'message':'Professor deleted!'});
  //   })
  // })

  // describe('PUT - Update a professor', () => {
  //   test('Should update a professor with ID = 3', async () => {

  //     let updatedProf = {
  //       'id': 3,
  //       'name': 'Updated Prof',
  //       'surname': 'Updated Surname',
  //       'email': 'update@gmail.com',
  //       'password': '123456'
  //     }

  //     const res = await request(server)
  //       .put(`/professors/${updatedProf.id}`)
  //       .send({
  //         'message': 'Professor updated!',
  //       });

  //     expect(res.statusCode).toBe(STATUS_CODES.STATUS_OK);
  //     expect(res.body).toMatchObject({'message':'Professor updated!'})
  //   })
  // })

});
