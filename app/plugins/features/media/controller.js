'use strict';

const Moment  = require('moment');
const Promise = require('bluebird');
const Request = require('request-promise');

exports.fetch = (date) => {
  const currentDate = Moment.utc().startOf('day');
  const inputDate   = Moment.utc(date).startOf('day');

  if (inputDate > currentDate) {
    return Promise.reject('Invalid Date');
  }

  const prevDate = Moment.utc(date).subtract(1, 'days');
  const nextDate = Moment.utc(date).add(1, 'days');

  const dates = {
    prevDate: prevDate.format('YYYY-MM-DD')
  };

  if (inputDate < currentDate) {
    dates.nextDate = nextDate.format('YYYY-MM-DD');
  }

  return Request({
    uri: `http://aapod-api.herokuapp.com/media/${date}`,
    json: true
  })
  .then((response) => {
    return Object.assign(response, dates);
  });
};
