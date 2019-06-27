'use strict';

const bcrypt = require('bcrypt');
const { User, Institution } = require('../models');
const { parseDomain } = require('../utils');

/**
 * Adds new user to the database
 * @param {Object} data structure is {name, role, email, password}
 */
const createUser = async (data) => {
    const domain = parseDomain(data.email);
    const institution = await Institution.findOne({ where: {domain: domain}, attributes: ['id'] });

    if(institution) {
        data.password = await bcrypt.hash(data.password, 10);
        data.institutionId = institution.get('id');
        const user = await User.create(data);
        return user.get({plain: true});
    }

    throw new Error('Institution not found.');
}

module.exports = {
    createUser
}