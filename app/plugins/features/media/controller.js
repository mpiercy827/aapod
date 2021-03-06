'use strict';

const Moment  = require('moment');
const Promise = require('bluebird');
const Request = require('request-promise');

const Config = require('../../../../config');

exports.fetchLatest = () => {
  return Request({
    uri: `${Config.API_HOST}/media/latest`,
    json: true
  })
  .then((response) => {
    const dates = {
      prevDate: Moment.utc(response.date).subtract(1, 'days').format('YYYY-MM-DD')
    };

    return Object.assign(response, dates);
  });
};

exports.fetch = (date) => {
  const currentDate = Moment.utc().startOf('day');
  const inputDate   = Moment.utc(date);

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
    uri: `${Config.API_HOST}/media/${date}`,
    json: true
  })
  .then((response) => {
    return Object.assign(response, dates);
  });
};
