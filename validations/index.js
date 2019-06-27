'use strict';

const { check } = require('express-validator');

const validateCreateData = [
  check('name').not().isEmpty()
  .withMessage('name field missing'),
  check('email').isEmail().withMessage('Invalid value for email')
  .not().isEmpty().withMessage('email field missing')
  .normalizeEmail(),
  check('role').not().isEmpty().withMessage('role field missing')
  .isIn(['student', 'academic', 'administrator'])
  .withMessage("Invalid value for role. must be one of ('student', 'academic', 'administrator')"),
  check('password')
    .isLength({ min: 7 })
    .withMessage('Password must be more than 6 characters')
    .isAlphanumeric()
    .withMessage('Password must contain only letters and numbers')
    .not().isEmpty().withMessage('password field missing')
];

const validateLoginData = [
  check('email').isEmail().withMessage('Invalid value for email')
  .not().isEmpty().withMessage('email field missing')
  .normalizeEmail(),
  check('password')
    .isLength({ min: 7 })
    .withMessage('Password must be more than 6 characters')
    .isAlphanumeric()
    .withMessage('Password must contain only letters and numbers')
    .not().isEmpty()
];

module.exports = {
  validateCreateData,
  validateLoginData
}