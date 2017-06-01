'use strict';

const Moment = require('moment');

const Server = require('../../../../app/server');

describe('Media integration test', () => {

  describe('fetch endpoint', () => {

    it('fetches the latest media from the AAPOD API', () => {
      return Server.injectThen({
        method: 'GET',
        url: '/'
      })
      .then((response) => {
        expect(response.statusCode).to.eql(200);
      });
    });

    it('fetches a response from the AAPOD API', () => {
      return Server.injectThen({
        method: 'GET',
        url: '/2017-05-18'
      })
      .then((response) => {
        expect(response.statusCode).to.eql(200);
      });
    });

    it('returns a 404 on invalid dates', () => {
      const date = Moment.utc().add(2, 'days').format('YYYY-MM-DD');

      return Server.injectThen({
        method: 'GET',
        url: `/${date}`
      })
      .then((response) => {
        expect(response.result).to.eql('404 Not Found');
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
