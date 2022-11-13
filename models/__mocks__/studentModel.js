const mockedSequelize = require('../../config/__mocks__/db-config');
const mockedStudentsData = require('./mockedStudentsData.json');

const mockStudent = mockedSequelize.define('student', {
  id: 1,
  email: 'student.studentic.student1@gmail.com',
  name: 'Student',
  surname: 'Studentic',
  password: '$2b$10$1hcd0OfQgAVDFOQReuEK9usxmXfsc/dM0SDjYXgI2llmSHTX7hOe6'
  },
  {
    timestamps: false
  }
);


// eslint-disable-next-line no-unused-vars
mockedSequelize.models.student.$queryInterface.$useHandler(function (query, queryOptions, done) {
  if (query === 'findOne') {
    const id = (queryOptions[0].where.id);
    return mockedSequelize.models.student.build({id:+id});
    //return Promise.resolve(mockedStudentsData[id-1]);
  }
  if (query === 'findAll') {
    return Promise.resolve(mockedStudentsData);
  }

})

module.exports = mockStudent;