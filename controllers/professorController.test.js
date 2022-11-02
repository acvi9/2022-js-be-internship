const request = require('supertest')

test('should first', async () => {
    await request('localhost:3000')
    .get('/list/professors')
    .then(data =>{
        console.log(data.statusCode)
        expect(data.statusCode).toBe(200)
    })
})



// const SequelizeMock = require('sequelize-mock');
// const dbMock = new SequelizeMock();
// const professorModel = require('../models/professorModel');

// const ProfessorMock = dbMock.define('professor', {
//     name: 'Andrija',
//     surname: 'Stankovic',
//     email: 'andrija@gmail.com',
//     password: '123456'}, {
//     instanceMethods: {
//         listAllProfessors: () => {
//             return ProfessorMock.findAll();
//         }
//     }
// });

// // test for listAllProfessors
// test('listAllProfessors', async () => {
//     const professor = await ProfessorMock.findAll();
//     const professors = await professor.listAllProfessors();
//     expect(professors).toEqual([professor]);
// });

