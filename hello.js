var http = require('http');
var myServer = http.createServer(function(request , response){
    response.writeHead(200,{'content-type': 'text/plain'});
    response.write("Welcome to Nodejs Application");
    response.end();
});

myServer.listen(2000);