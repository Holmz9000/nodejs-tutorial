var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});//write a response to the client with writeHead
  res.write('Hello World!');
  res.end();//end the response
}).listen(52510); //the server object listens on port 52510
