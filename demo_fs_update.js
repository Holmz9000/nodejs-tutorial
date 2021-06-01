//Update Files
//The File System module has methods for updating files:

//fs.appendFile()
//fs.writeFile()
//The fs.appendFile() method appends the specified content at the end of the specified file:

//Example
//Append "This is my text." to the end of the file "mynewfile1.txt":
var fs = require('fs');

//append content at the end of the file:
fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});
// and this is what happened on CMD
//C:\Users\childrenoftheband\nodejs-tutorial>node demo_fs_update.js
//Updated!
// and this is the text file mofo

// Hello content! This is my text.
