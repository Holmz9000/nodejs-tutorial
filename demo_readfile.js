// Creates a file to read this file "demofile1.html"
// currently sitting in C:\Program Files\nodejs
//<html>
//<body>
//<h1>My Header</h1>
// <p>My paragraph.</p>
// </body>
// </html>
var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(52510);
//it worked!! Don't use the ./demofile1.html as didn't work in same folder
