'use strict';

const parseDomain = email => {
    const result = email.split('@');
    return result[1];
}

module.exports = {
    parseDomain
}