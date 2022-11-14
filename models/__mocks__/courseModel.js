const mockedSequelize = require('../../config/__mocks__/db-config');
const mockedCoursesData = require('./mockedCoursesData.json');

const mockCourse = mockedSequelize.define('course',  {
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
mockedSequelize.models.course.$queryInterface.$useHandler(function(query, queryOptions, done) {
  if (query === 'findOne') {
    const id = (queryOptions[0].where.id);
    return Promise.resolve(mockedCoursesData[id-1]);
  }
  if (query === 'findAll') {
    return Promise.resolve(mockedCoursesData);
  }
})
module.exports = mockCourse;