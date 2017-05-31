'use strict';

const Handlebars = require('../../app/libraries/handlebars');

describe('Handlebars', () => {

  describe('ifCond', () => {

    it('should return first branch if variables are equal', () => {
      const html = "{{#ifCond v1 v2}}true{{else}}false{{/ifCond}}";
      const variables = {
        v1: 'test',
        v2: 'test'
      };

      const template = Handlebars.compile(html);
      const result = template(variables);

      expect(result).to.eql('true');
    });

    it('should return second branch if variables are not equal', () => {
      const html = "{{#ifCond v1 v2}}true{{else}}false{{/ifCond}}";
      const variables = {
        v1: 'test',
        v2: 'test2'
      };

      const template = Handlebars.compile(html);
      const result = template(variables);

      expect(result).to.eql('false');
    });

  });

});
