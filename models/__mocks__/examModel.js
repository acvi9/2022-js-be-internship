const mockedSequelize = require('../../config/__mocks__/db-config');
const mockedExamsData = require('./mockedExamsData.json');

const mockExam = mockedSequelize.define('exam', {
  id: 1,
  date_time: '2022-01-17T04:33:12.000Z',
  status: false,
  points: 0,
  studentId: 1,
  termId: 1,
  courseId: 1

},
{
  timestamps: false
}
);

// eslint-disable-next-line no-unused-vars
mockedSequelize.models.exam.$queryInterface.$useHandler(function (query, queryOptions, done) {
  if (query === 'findOne') {
    return Promise.resolve(mockedExamsData[0]);
  }
  if (query === 'findAll') {
    return Promise.resolve(mockedExamsData);
  }

})

module.exports = mockExam;