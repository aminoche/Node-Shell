//ls.js
const fs = require('fs');
const done = require('./done');

module.exports = function() {
  fs.readdir('./', 'utf8', (err, files) => {
    if (err) {
      throw err;
    } else {
      // process.stdout.write('\n');
      // process.stdout.write(files.join('\n'));
      // process.stdout.write('\nprompt > ');
      done('\n' + files.join('\n'));
    }
  });
};
