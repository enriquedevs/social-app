/*!
 * social-app - app.js
 */

'use strict';

/**
 * Module dependencies.
 */
const middlewares = require('koa-middlewares');
const routes = require('./routes');
const config = require('./config');
const path = require('path');
const http = require('http');
const koa = require('koa');

let app = koa();

/**
 * ignore favicon
 */
app.use(middlewares.favicon());

/**
 * response time header
 */
app.use(middlewares.rt());

/**
 * static file server
 */
app.use(middlewares.staticCache(path.join(__dirname, 'public'), {
  buffer: !config.debug,
  maxAge: config.debug ? 0 : 60 * 60 * 24 * 7
}));
app.use(middlewares.bodyParser());
  
if (config.debug && process.env.NODE_ENV !== 'test') {
  app.use(middlewares.logger());
}
  
/**
 * router
 */
app.use(middlewares.router(app));
routes(app);
  
app = module.exports = http.createServer(app.callback());
  
if (!module.parent) {
  app.listen(config.port);
  console.log('$ open http://127.0.0.1:' + config.port);
}
  