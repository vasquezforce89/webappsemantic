'use strict';

var request = require("supertest"),
    app = require("../app").getapp;

    describe('GET /', function(){
        it('expects HTTP response 200', function (done){

            request(app)
            .get('/')
            .espect(200, done);
        })

    })