var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end();
}).listen(52510);
//Notice that we use "./" to locate the module, that means that the module
//is located in the same folder as the Node.js file.
//Save the code above in a file called "demo_module.js", and initiate the file:
