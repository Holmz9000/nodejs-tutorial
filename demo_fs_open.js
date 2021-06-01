//The fs.open() method takes a "flag" as the second argument,
//if the flag is "w" for "writing", the specified file is opened for writing.
// If the file does not exist, an empty file is created:
//Example
//Create a new, empty file using the open() method:

var fs = require('fs');

//create an empty file named mynewfile2.txt:
fs.open('mynewfile2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});
