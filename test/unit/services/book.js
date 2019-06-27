'use strict';

const { expect } = require('chai');
const sinon = require('sinon');
const { User } = require('../../../models');
const { fetch } = require('../../../services/book');

let UserStub, InstitutionStub, BookStub;

describe('Book Service', function () {
    beforeEach(done => {
        UserStub = sinon.stub(User, 'findByPk');
        done();
    });

    afterEach(done => {
        UserStub.restore();
        done();
    });
    
    it('fetch() returns all the books a user has access to through their institution', done => {
        const userId = '83a2d3db-1ce9-43f9-ad1f-e7cb47b8b2cd';
        const data = {
            id: "83a2d3db-1ce9-43f9-ad1f-e7cb47b8b2cd",
            name: "A Student",
            email: "student@harvard.edu",
            role: "student",
            institution: {
                id: "c087d690-869a-4c12-b9a6-3dc368d3828e",
                books: [{
                    title: "A Book",
                    isbn: 24354434,
                    author: "An author"
                }]
            }
        }

        UserStub.withArgs(userId).resolves(User.build(data))

        const books = fetch(userId);

        expect(UserStub.called).to.be.true;

        done();
    })
})