'use strict';

const Hapi = require('hapi');
const Path = require('path');

const Handlebars = require('./libraries/handlebars');
const Config     = require('../config');

const server = new Hapi.Server({
  connections: {
    router: {
      stripTrailingSlash: true
    },
    routes: {
      files: {
        relativeTo: Path.join(__dirname, 'public')
      }
    }
  }
});

server.connection({ port: Config.PORT });

server.register([
  require('inject-then'),
  require('vision'),
  require('inert'),
  require('./plugins/features/assets'),
  require('./plugins/features/media')
], (err) => {
  /* istanbul ignore next */
  if (err) {
    throw err;
  }
});

server.views({
  engines: {
    hbs: Handlebars
  },
  path: './app/views',
  layoutPath: './app/views/layouts',
  layout: 'default'
});

module.exports = server;
