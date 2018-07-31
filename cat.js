//cat.js
const fs = require('fs');

module.exports = function(files) {
  files.forEach(file => {
    fs.readFile('./' + file, 'utf8', (err, data) => {
      if (err) throw err;
      process.stdout.write(data);
      process.stdout.write('\nprompt > ');
    });
  });
};
