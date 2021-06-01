//The fs.writeFile() method replaces the specified file and content:

//Example
// Replace the content of the file "mynewfile3.txt":
var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'THE REVOLUTION WILL NOT BE TELEVISED, WILL NOT BE TELEVISED, WILL NOT BE TELEVISED', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});
// Let's try it and see...
