'use strict';

const { User, Institution, Book } = require('../models');

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