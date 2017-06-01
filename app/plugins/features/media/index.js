'use strict';

const Moment = require('moment');

const Controller = require('./controller');

const DateRegex = /\d{4}-\d{2}-\d{2}/;
const PacificOffsetHours = -7;

exports.register = (server, options, next) => {
  server.route({
    method: 'GET',
    path: '/{date}',
    config: {
      handler: (request, reply) => {
        const date = request.params.date;

        if (!date.match(DateRegex)) {
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

  server.route({
    method: 'GET',
    path: '/',
    config: {
      handler: (request, reply) => {
        const date = Moment.utc().add(PacificOffsetHours, 'hours').format('YYYY-MM-DD');

        return reply.redirect(`/${date}`);
      }
    }
  });

  next();
};

exports.register.attributes = {
  name: 'media'
};
