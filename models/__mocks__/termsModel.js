const mockedSequelize = require('../../config/__mocks__/db-config');
const mockedTermsData = require('./mockedTermsData.json');

const mockTerms = mockedSequelize.define('term',  {
  id: 1,
  name: 'junski',
  from: '2022-06-13T14:30:59.000Z',
  to: '2022-06-23T14:30:59.000Z',
});

// eslint-disable-next-line no-unused-vars
mockedSequelize.models.term.$queryInterface.$useHandler(function(query, queryOptions, done) {
  if (query === 'findOne') {
    const id = (queryOptions[0].where.id);
    return Promise.resolve(mockedTermsData[id-1]);
  }
  if (query === 'findAll') {
    return Promise.resolve(mockedTermsData);
  }
})

module.exports = mockTerms;