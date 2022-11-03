const request = require('supertest');
const {termsMock} = require('./termsMock');
const {STATUS_CODES} = require('../../constants');
const app = require('../../app');
require('dotenv').config();
const host = process.env.DB_HOST
const server = app.listen(5000, host,()=>{

})


describe('Terms Controller', () => {

    test('Should test if the connection to the route is successful', async () => {
        await request(server)
        .get('/terms')
        .then(data =>{
            expect(data.statusCode).toBe(STATUS_CODES.STATUS_OK);
        })
    });

    test('Should return all terms', async () => {
        await request(server)
        .get('/terms')
        .then(data =>{
            expect(data.body).toEqual(termsMock.listAll)
        })
    });
});
