const { expect } = require('chai');
const server = require('../../index');
const request = require('supertest')(server);

describe('GET /', function () {
  it('returns a json response', function (done) {
    request.get('/')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('returns a status and data property', function (done) {
    request.get('/')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        expect(response.body.status).to.equal('success');
        expect(response.body.data).to.equal('Express Code Challenge Started');
        done();
      })
  });
});