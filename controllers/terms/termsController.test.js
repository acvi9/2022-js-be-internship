/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../app');
const mockedTermsData = require('../../models/__mocks__/mockedTermsData.json');
const {STATUS_CODES} = require('../../constants');

jest.mock('../../config/db-config');
jest.mock('../../models/termsModel.js');

describe('Terms Controller', () => {

  describe('GET - List All terms', () => {
    test('Should return all tests', async () => {
      const response = await request(app)
        .get('/terms');

      expect(response.statusCode).toBe(STATUS_CODES.STATUS_OK);
      expect(response.body).toMatchObject({'terms':mockedTermsData});
    })
  });

  describe('GET - Find By ID', () => {
    test('Should return a term with ID = 1', async () => {
      const res = await request(app)
        .get('/terms/1');

      expect(res.statusCode).toBe(STATUS_CODES.STATUS_OK);
      expect(res.body).toMatchObject({'terms':mockedTermsData[1]});
    })
  });

  describe('POST - Create a new term', () => {
    test('Should create a new term', async () => {

      let lastID = mockedTermsData[mockedTermsData.length - 1].id;

      let newTerm = {
        'id': lastID + 1,
        'name': 'oktobarski',
        'from': '2022-10-13T14:30:59.000Z',
        'to': '2022-10-23T14:30:59.000Z'
      }

      mockedTermsData.push(newTerm);

      const res = await request(app)
        .post('/terms')
        .send(newTerm);

      let lastItem = mockedTermsData[mockedTermsData.length - 1];

      expect(res.statusCode).toBe(STATUS_CODES.STATUS_OK);
      expect(lastItem.name).toBe(newTerm.name);
      expect(lastItem.from).toBe(newTerm.from);
      expect(lastItem.to).toBe(newTerm.to);
            
    })
  });

  describe('DELETE - Delete a term', () => {
    test('Should delete a term with ID = 1', async () => {

      const res = await request(app)
        .delete('/terms/1');

      expect(res.statusCode).toBe(STATUS_CODES.STATUS_OK);
      expect(res.body).toMatchObject({'message':'Term deleted!'});
    })
  })

  describe('PUT - Update a term', () => {
    test('Should update a term with ID = 1', async () => {

      let updateTerm = {
        'id': 1,
        'name': 'oktobarski2',
        'from': '2022-10-24T14:30:59.000Z',
        'to': '2022-10-27T14:30:59.000Z'
      }

      const res = await request(app)
        .put(`/terms/${updateTerm.id}`)
        .send({
          'message': 'term updated!',
        });

      expect(res.statusCode).toBe(STATUS_CODES.STATUS_OK);
      expect(res.body).toMatchObject({'message':'Term updated!'})
    })
  });

});
