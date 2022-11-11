/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../app');
const {STATUS_CODES} = require('../../constants');

jest.mock('../../config/db-config');
jest.mock('../../models/studentModel.js');
jest.mock('../../models/professorModel.js');

describe('Login Controller', () => {

  describe('POST - Login', () => {
    test('Should log user in', async () => {
    
      let credentials = {
        'email': 'mijodrag.zivkovic.student1@gmail.com',
        'password': '12345',
      }
    
      const res = await request(app)
        .post('/terms')
        .send(credentials);
    
      expect(res.statusCode).toBe(STATUS_CODES.STATUS_OK);
                
    })
  })
})