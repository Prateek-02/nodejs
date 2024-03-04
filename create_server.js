var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  //open a file on the server and return its content
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(data);
  return req.end();
}).listen(8081);