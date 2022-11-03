const request = require('supertest');
const server = require('../index');

describe('Professor Controller', () => {

    test('Should test if the connection to the route is successful', async () => {
        await request('localhost:3000')
        .get('/list/professors')
        .then(data =>{
            console.log(data.statusCode)
            expect(data.statusCode).toBe(200)
        })
    });

    test('Should return all professors', async () => {
        await request('localhost:3000')
        .get('/list/professors')
        .then(data =>{
            console.log(data.body)
            expect(data.body).toEqual({"professors":[{"id":1,"name":"Milos","surname":"Milosavljevic","email":"milos@gmail.com","password":"123"}]})
        })
    });
});