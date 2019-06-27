'use strict';

/**
 * Extract the domain part of an email
 * @param {sring} email 
 */
const parseDomain = email => {
    const result = email.split('@');
    return result[1];
}

module.exports = {
    parseDomain
}