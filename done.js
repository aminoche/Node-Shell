module.exports = function(output) {
  //show output
  process.stdout.write(output);
  //show new line prompt
  process.stdout.write('\nprompt > ');
};
