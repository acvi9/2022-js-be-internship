const request = require('supertest');
const {host,port} = require('../index');
const server = `${host}:${port}`;


describe('Professor Controller', () => {

    test('Should test if the connection to the route is successful', async () => {
        await request(server)
        .get('/professors')
        .then(data =>{
            expect(data.statusCode).toBe(200);
        })
    });

    test('Should return all professors', async () => {
        await request(server)
        .get('/professors')
        .then(data =>{
            expect(data.body).toEqual({"professors":[{"id":1,"name":"Milos","surname":"Milosavljevic","email":"milos@gmail.com","password":"123"}]})
        })
    });
});