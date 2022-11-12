const mockedSequelize = require('../../config/__mocks__/db-config');
const mockedProfessorsData = require('./mockedProfessorsData.json');

const mockProfessor = mockedSequelize.define('professor', {
  id: 1,
  email: 'test@profExample.com',
  name: 'profTest',
  surname: 'profTestic',
  password: '123'
},
{
  timestamps: false
});

// eslint-disable-next-line no-unused-vars
mockedSequelize.models.professor.$queryInterface.$useHandler(function (query, queryOptions, done) {
  if (query === 'findOne') {
    return Promise.resolve(mockedProfessorsData[0]);
  }
  if (query === 'findAll') {
    return Promise.resolve(mockedProfessorsData);
  }
  if (query === 'delete') {
    return Promise.resolve(1);
  }
});

module.exports = mockProfessor;