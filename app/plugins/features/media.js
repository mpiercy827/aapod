'use strict';

const Request = require('request-promise');

const Config = require('../../../config');

const dateRegex = /\d{4}-\d{2}-\d{2}/

exports.register = (server, options, next) => {
  server.route({
    method: 'GET',
    path: '/{date}',
    config: {
      handler: (request, reply) => {
        const date = request.params.date;

        if (!date.match(dateRegex)) {
          return reply('404 Not Found');
        }

        return Request({
          uri: `http://aapod-api.herokuapp.com/media/${date}`,
          json: true
        })
        .then((response) => {
          return reply.view('media', response);
        });
      }
    }
  });

  next();
};

exports.register.attributes = {
  name: 'media'
};
