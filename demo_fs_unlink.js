//Unlink is an Elon Musk way of saying DELETE THE FILE FUCKER
var fs = require('fs');

//Delete the file mynewfile2.txt:
fs.unlink('mynewfile2.txt', function (err) {
  if (err) throw err;
  console.log('YOUR FILE IS NOW DESTROYED! EXTERMINATE! EXTERMINATE! EXTERMINATE!');
});
