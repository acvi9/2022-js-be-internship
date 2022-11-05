const mockedSequelize = require('../../config/__mocks__/db-config');
const mockedProfessorsData = require('./mockedProfessorsData.json');

const mockProfessor = mockedSequelize.define('Professor', {
  id: 1,
  email: 'test@profExample.com',
  name: 'profTest',
  surname: 'profTestic',
  password: '123'
},
  {
    timestamps: false
  });

mockedSequelize.models.Professor.$queryInterface.$useHandler(function (query, queryOptions, done) {
  if (query === 'findOne') {
    return Promise.resolve(mockedProfessorsData[2]);
  }
  if (query === 'findAll') {
    return Promise.resolve(mockedProfessorsData);
  }
});

module.exports = mockProfessor;