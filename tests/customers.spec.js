const req = require('supertest');
const expect = require('expect');
var app = require('../app');

describe('GET:',() => {
    it('should give proper ping',(done)=>{
        var testMsg = "Test Route";       
        req(app)
        .get('/ping')
        .expect(200)
        .expect((res) => {
            expect(res.body.text).toEqual(testMsg);
        })
        .end(done);
    })

    it('should return proper customer data',(done)=>{
             
        req(app)
        .get('/customers/Souvik Misra')
        .expect(200)
        .expect((res) => {
            expect(res.body[0].name).toEqual('Souvik Misra');
        })
        .end(done);
    })
})