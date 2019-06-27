'use strict';

const { expect } = require('chai');
const { parseDomain } = require('../../../utils');

describe('parseDomain', function () {
    it('returns the domain bit of an email address', done => {
        expect(parseDomain('iifeoluwa.ao@gmail.com')).to.equal('gmail.com');
        expect(parseDomain('student@lancaster.edu')).to.equal('lancaster.edu');
        done();
    })
})