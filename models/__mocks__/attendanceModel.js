const mockedSequelize = require('../../config/__mocks__/db-config');
const mockedAttendanceData = require('./mockedAttendanceData.json');

const mockAttendance = mockedSequelize.define('Attendance', {
  id: 1,
  studentId: 1,
  courseId: 1
},
{
  timestamps: false
}
);

// eslint-disable-next-line no-unused-vars
mockedSequelize.models.Student.$queryInterface.$useHandler(function (query, queryOptions, done) {
  if (query === 'findOne') {
    return Promise.resolve(mockedAttendanceData[0]);
  }
  if (query === 'findAll') {
    return Promise.resolve(mockedAttendanceData);
  }

})

module.exports = mockAttendance;