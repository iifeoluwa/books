'use strict';

const { User, Institution, Book } = require('../models');

/**
 * Fetch books associated to a user's intitution
 * @param {string} userId
 * @returns Array 
 */
const fetch = async (userId) => {
  const user = await User.findByPk(userId, {
    include: [
      {model: Institution, include: [
        {model: Book, attributes: ['isbn', 'title', 'author']}
      ]}
    ]
  });

  return user.institution.get('books');
}

module.exports = {
  fetch
}