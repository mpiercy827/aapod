'use strict';

const Controller = require('./controller');

const dateRegex = /\d{4}-\d{2}-\d{2}/;

exports.register = (server, options, next) => {
  server.route({
    method: 'GET',
    path: '/',
    config: {
      handler: (request, reply) => {
        return Controller.fetchLatest()
        .then((response) => {
          return reply.view('media', response);
        })
        .catch((err) => {
          /* istanbul ignore next*/
          return reply('404 Not Found');
        });
      }
    }
  });

  server.route({
    method: 'GET',
    path: '/{date}',
    config: {
      handler: (request, reply) => {
        const date = request.params.date;

        if (!date.match(dateRegex)) {
          return reply('404 Not Found');
        }

        return Controller.fetch(date)
        .then((response) => {
          return reply.view('media', response);
        })
        .catch((err) => {
          return reply('404 Not Found');
        });
      }
    }
  });

  next();
};

exports.register.attributes = {
  name: 'media'
};
