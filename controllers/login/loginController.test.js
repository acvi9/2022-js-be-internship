const request = require('supertest');
const app = require('../../app');
const {STATUS_CODES} = require('../../constants');
require('dotenv').config();


// Mocking the database and the model
jest.mock('../../config/db-config');
jest.mock('../../models/studentModel.js');
jest.mock('../../models/professorModel.js');

describe('Login Controller', () => {

    describe('POST - Login', () => {
        test('Should log student in', async () => {
    
          let credentials = {
            'email': "andrew.adrewic.student1@gmail.com",
            'password': 12345,
          }
    
          const res = await request(app)
            .post('/login')
            .send(credentials);
    
          console.log(res.body);
    
          expect(res.statusCode).toBe(STATUS_CODES.STATUS_OK);
                
        })
    })

    describe('POST - Login', () => {
      test('Shouldn\'t log user in', async () => {
  
        let credentials = {
          'email': "andrew.adrewic@gmail.com",
          'password': 12345,
        }
  
        const res = await request(app)
          .post('/login')
          .send(credentials);
  
        console.log(res.body);
  
        expect(res.statusCode).toBe(STATUS_CODES.NOT_FOUND);
              
      })
  })
})