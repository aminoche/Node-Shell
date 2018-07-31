//cat.js
const fs = require('fs');
const done = require('./done');

module.exports = function(files) {
  files.forEach(file => {
    fs.readFile('./' + file, 'utf8', (err, data) => {
      if (err) throw err;
      done(data);
    });
  });
};
