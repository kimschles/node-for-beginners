var http = require('http');

http.createServer(function(request, response){
  response.writeHead(200, 'Everything is groovy')
  response.end('Ending now')
}).listen(8000);
