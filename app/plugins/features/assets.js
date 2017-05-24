'use strict';

const Path = require('path');

exports.register = (server, options, next) => {
  server.route({
    method: 'GET',
    path: '/css/{path*}',
    handler: (request, reply) => {
      const path = Path.join('css', request.params.path);
      reply.file(path);
    }
  });

  next();
};

exports.register.attributes = {
  name: 'assets'
};
