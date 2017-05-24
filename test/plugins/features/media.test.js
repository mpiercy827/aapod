'use strict';

const Server = require('../../../app/server');

describe('Server', () => {

  describe('retrieve', () => {

    it('fetches a response from the AAPOD API', () => {
      return Server.injectThen({
        method: 'GET',
        url: '/2017-05-18'
      })
      .then((response) => {
        expect(response.statusCode).to.eql(200);
      });
    });

    it('does not fetch response if url slug is not a date', () => {
      return Server.injectThen({
        method: 'GET',
        url: '/not-a-date'
      })
      .then((response) => {
        expect(response.result).to.eql('404 Not Found');
      });
    });

  });

});