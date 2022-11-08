/* eslint-disable no-undef */
const request = require('supertest');
const {courseMock} = require('./courseMock');
const {STATUS_CODES} = require('../../constants');
const app = require('../../app');
require('dotenv').config();
// const host = process.env.DB_HOST
// const server = app.listen(5010, host,()=>{})

jest.mock('../../config/db-config');
jest.mock('../../models/courseModel');

describe('Course Controller', () => {

  test('Should test if the connection to the route is successful', async () => {
    await request(app)
      .get('/courses')
      .then(data =>{
        expect(data.statusCode).toBe(STATUS_CODES.STATUS_OK);
      })
  });

  test('Should return all courses', async () => {
    await request(app)
      .get('/courses')
      .then(data =>{
        expect(data.body).toEqual(courseMock.listAll)
      })
  });
});
