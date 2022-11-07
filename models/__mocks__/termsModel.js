const mockedSequelize = require('../../config/__mocks__/db-config');
const mockedTermsData = require('./mockedTermsData.json');

const mockTerms = mockedSequelize.define('Term',  {
  id: 1,
  name: 'junski',
  from: '2022-06-13T14:30:59.000Z',
  to: '2022-06-23T14:30:59.000Z',
});

mockedSequelize.models.Term.$queryInterface.$useHandler(function(query, queryOptions, done) {
  if (query === 'findOne') {
    return Promise.resolve(mockedTermsData[1]);
  }
  if (query === 'findAll') {
    return Promise.resolve(mockedTermsData);
  }
})

module.exports = mockTerms;