'use strict';

const { createUser } = require('../services/user');
const { fetch } = require('../services/book');

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

const fetchBooks = async (req, res, next) => {
    try {
        const books = await fetch(req.user._id);
        res.status(200).jsend.success(books);
    } catch (error) {
        res.status(500).jsend.error(error.message);
    }
}

module.exports = {
    create,
    fetchBooks
}