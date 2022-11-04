const mockedSequelize = require('../../config/__mocks__/db-config');
const mockedStudentsData = require('./mockedStudentsData.json');
const mockStudent = mockedSequelize.define('Student',  {
  id: 1,
  email: 'tessst@example.com',
  name: 'test',
  surname: 'jest',
  password: '123'
});

mockedSequelize.models.Student.$queryInterface.$useHandler(function(query, queryOptions, done) {
  if (query === 'findOne') {
    return Promise.resolve(mockedStudentsData[0]);
  }
  if (query === 'findAll') {
    return Promise.resolve(mockedStudentsData);
  }
})
module.exports = mockStudent;