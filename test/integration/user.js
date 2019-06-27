const { expect } = require('chai');
const server = require('../../index');
const request = require('supertest')(server);

const { sequelize, createInitialInstitution} = require('../../models');

before(done => {
  sequelize.sync({force: true}).then(async () => {
    await createInitialInstitution();
    done();
  });
});

describe('POST /users/create', function () {

  it('returns an error when one or more fields are missing', function (done) {
    request.post('/users/create')
      .send({name: 'Super User', password: 'somerandomstuff73'})
      .expect('Content-Type', /json/)
      .expect(422)
      .end(function(err, res) {
        if (err) return done(err);
        expect(res.body.data).to.have.property('errors');
        done();
      })
  });

  it('creates a user succesfully', function (done) {
    const body = {name: 'Super User', password: 'somerandomstuff73', email: 'myname@harvard.edu', role: 'student'};
    request.post('/users/create')
      .send(body)
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        
        expect(res.body.status).to.equal('success');
        expect(res.body.data).to.have.property('id');
        expect(res.body.data).to.have.property('institutionId');
        expect(res.body.data.name).to.equal(body.name);
        done();
      });
  });
});

describe('POST /users/signin', function () {
  const body = {password: 'somerandomstuff73', email: 'myname@harvard.edu'};

  it('returns an error message for invalide credentials', function (done) {
    request.post('/users/signin')
    .send({password: 'somerandomstssuff73', email: 'myname@harvard.edu'})
    .expect('Content-Type', /json/)
    .expect(400)
    .end(function(err, res) {
      if (err) return done(err);
      
      expect(res.body.status).to.equal('fail');
      done();
    });
  });

  it('returns a token for a signed in user', function (done) {
    request.post('/users/signin')
    .send(body)
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(err, res) {
      if (err) return done(err);
      
      expect(res.body.status).to.equal('success');
      expect(res.body.data).to.have.property('token');
      done();
    });
  });
});