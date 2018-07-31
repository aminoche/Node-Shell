const request = require('request');

module.exports = function(url) {
  request(url, function(error, response, body) {
    if (error) {
      throw error;
    } else {
      process.stdout.write(response.statusCode + '\n');
      process.stdout.write(body + '\n');
      process.stdout.write('\nprompt > ');
    }
  });
};
