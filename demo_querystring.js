var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'}); //creates the head of the http
  var q = url.parse(req.url, true).query; //to distinguish from the url turning
  var txt = q.year + " " + q.month; // the next variable into q for query
  // then adding as if delivering search results from url involving year and month
  res.end(txt); // resolves the argument
}).listen(52510); //listening to my http node mofo
// this is what is an example I can enter as the querystring for the URL:
// http://localhost:52510/?year=2017&month=July
