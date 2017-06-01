'use strict';

const Moment = require('moment');

const Controller = require('../../../../app/plugins/features/media/controller');

describe('Media Controller', () => {

  describe('fetch', () => {

    it('fetches a response from the AAPOD API', () => {
      return Controller.fetch('2017-05-30')
      .then((response) => {
        expect(response.date).to.eql('2017-05-30');
        expect(response.nextDate).to.eql('2017-05-31');
        expect(response.prevDate).to.eql('2017-05-29');
      });
    });

    it('does not fetch nextDate for current date (in Pacific Timezone)', () => {
      const date = Moment.utc().format('YYYY-MM-DD');

      return Controller.fetch(date)
      .then((response) => {
        expect(response.date).to.eql(date);
      });
    });

    it('throws an error if the date is in the future', () => {
      const date = Moment.utc().add(2, 'days').format('YYYY-MM-DD');

      return Controller.fetch(date)
      .catch((err) => {
        expect(err).to.eql('Invalid Date');
      });
    });

  });

});
