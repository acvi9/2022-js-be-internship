const SequelizeMock = require('sequelize-mock');
const dbMock = new SequelizeMock();
const professorModel = require('../models/professorModel');

const ProfessorMock = dbMock.define('professor', {
    name: 'Andrija',
    surname: 'Stankovic',
    email: 'andrija@gmail.com',
    password: '123456'}, {
    instanceMethods: {
        listAllProfessors: () => {
            return ProfessorMock.findAll();
        }
    }
});

// test for listAllProfessors
test('listAllProfessors', async () => {
    const professor = await ProfessorMock.findAll();
    const professors = await professor.listAllProfessors();
    expect(professors).toEqual([professor]);
});
