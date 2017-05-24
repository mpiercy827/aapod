'use strict';

const Server = require('../../../app/server');

describe('Server', () => {

  describe('retrieve', () => {

    it('fetches css from app/public/css directory', () => {
      return Server.injectThen({
        method: 'GET',
        url: '/css/main.css'
      })
      .then((response) => {
        expect(response.statusCode).to.eql(200);
      });
    });

  });

});
