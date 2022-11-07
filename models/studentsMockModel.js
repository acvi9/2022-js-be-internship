const SequelizeMock = require('sequelize-mock');
const DBConnectionMock = new SequelizeMock();

const UserMock1 = DBConnectionMock.define('users', {
  'id': 1,
  'email': 'test@example.com',
  'name': 'test',
  'surname': 'jest',
  'password': '123'
}, {
  instanceMethods: {
    myTestFunc: () => {
      return 'Test User';
    },
  },
});
const UserMock2 = DBConnectionMock.define('users', {
  'id': 2,
  'email': 'bla@example.com',
  'name': 'blabla',
  'surname': 'jest',
  'password': '123'
}, {
  instanceMethods: {
    myTestFunc: () => {
      return 'Test User';
    },
  },
});

const mockStudentsModel = [UserMock1._defaults,UserMock2._defaults];
module.exports = mockStudentsModel;