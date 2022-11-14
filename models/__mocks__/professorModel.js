const mockedSequelize = require('../../config/__mocks__/db-config');
const mockedProfessorsData = require('./mockedProfessorsData.json');

const mockProfessor = mockedSequelize.define('professor', {
  id: 1,
  email: 'profa.profic1@gmail.com',
  name: 'Profa',
  surname: 'Profic',
  password: '12345'
},
{
  timestamps: false
});

// eslint-disable-next-line no-unused-vars
mockedSequelize.models.professor.$queryInterface.$useHandler(function (query, queryOptions, done) {
  if (query === 'findOne') {
 
    if(queryOptions[0].where.id){
      const id = (queryOptions[0].where.id);
      return Promise.resolve(mockedProfessorsData[id-1]);
    }
    else{
      return Promise.resolve(mockedProfessorsData[0]);
    }
  }
  if (query === 'findAll') {
    return Promise.resolve(mockedProfessorsData);
  }
  if (query === 'delete') {
    return Promise.resolve(1);
  }
});

module.exports = mockProfessor;