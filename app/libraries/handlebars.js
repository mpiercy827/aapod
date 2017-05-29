'use strict';

const Swag       = require('swag');
const Handlebars = require('handlebars');

Swag.registerHelpers(Handlebars);

Handlebars.registerHelper('ifCond', function (v1, v2, options) {
  if (v1 === v2) {
    return options.fn(this);
  }
  return options.inverse(this);
});

module.exports = Handlebars;
