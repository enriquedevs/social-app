/*!
 * social-app - config.js
 */

'use strict';

/**
 * Module dependencies.
 */
const version = require('./package.json').version;
const path = require('path');

const config = {
  version: version,
  debug: process.env.NODE_ENV !== 'production',
  port: process.env.PORT || 8080
};

module.exports = config;
