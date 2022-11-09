/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../app');
const {STATUS_CODES} = require('../../constants');
const mockedExamData = require('../../models/__mocks__/mockedExamData.json');

// Mocking the database and the model
jest.mock('../../config/db-config');
jest.mock('../../models/examModel');