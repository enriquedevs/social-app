/*!
 * social-app - controllers/home.js
 */

'use strict';

/**
 * Module dependencies.
 */
const config = require('../config');
const path = require('path');
const fs = require('fs');

const page = fs.readFileSync(path.join(__dirname, '../public/views/index.html'), 'utf8')
  .replace('{{version}}', config.version);

module.exports = function* home(next) {
  this.body = page;
};