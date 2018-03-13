/*!
 * social-app - routes.js
 */

'use strict';

/**
 * Module dependencies.
 */
const home = require('./controllers/home');

module.exports = function routes(app) {
  app.get('/', home);
};