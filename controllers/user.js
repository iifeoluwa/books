'use strict';

const { createUser } = require('../services/user');

const create = async (req, res, next) => {
    try {
        const user = await createUser(req.body);
        delete user.password;

        res.status(200).jsend.success(user);
    } catch (error) {
        const status = error.message === 'Institution not found.' ? 400 : 500
        res.status(status).jsend.error(error.message);
    }
}

module.exports = {
    create
}