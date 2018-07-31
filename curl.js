const request = require('request');
const done = require('./done');

module.exports = function(url) {
  request(url, function(error, response, body) {
    if (error) {
      throw error;
    } else {
      done(response.statusCode + '\n' + body);
    }
  });
};
