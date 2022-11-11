const mockedSequelize = require('../../config/__mocks__/db-config');
const mockedCoursesData = require('./mockedCoursesData.json');

const mockCourse = mockedSequelize.define('Course',  {
  id: 1,
  name: 'TEST',
  description: 'We all know what maths is.',
  espb: 8,
  professorId: 2
},
{
  timestamps: false
});

// eslint-disable-next-line no-unused-vars
mockedSequelize.models.Course.$queryInterface.$useHandler(function(query, queryOptions, done) {
  if (query === 'findOne') {
    return Promise.resolve(mockedCoursesData[0]);
  }
  if (query === 'findAll') {
    return Promise.resolve(mockedCoursesData);
  }
})
module.exports = mockCourse;