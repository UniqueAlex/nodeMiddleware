var http = require('http');
var url = require('url');
var cookieModule = require('./cookie');

http.createServer(function(req, res){
    var pathName = url.parse(req.url).pathname;
    if(req.headers.cookie){
        cookieModule.isFirstVist(req, res);
    }else{
        
    }
    //console.log(req.cookie);
    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.end("hello nodejs\n");
}

).listen(1337, '127.0.0.1');
