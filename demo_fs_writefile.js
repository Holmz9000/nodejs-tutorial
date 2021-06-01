//The fs.writeFile() method replaces the specified file and content if it exists.
//If the file does not exist, a new file, containing the specified content, will be created:

//Example
//Create a new file using the writeFile() method:
var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'CONTENT MOFOS RIDE THE LATE TRAIN', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
