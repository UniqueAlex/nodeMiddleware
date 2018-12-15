var http = require('http');
var url = require('url');
var cookieModule = require('./cookie');

http.createServer(function(req, res){
    //var pathName = url.parse(req.url).pathname.substring(1);
    let path = url.parse(req.url).pathname.substring(1);
    let pathParam = path.split('/');
    let controller = pathParam[0] || 'index';
    let action = pathParam[1] || 'index';
    let param = pathParam.slice(2);
    console.log(controller, action, param);
    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.end("hello nodejs\n");
}

).listen(1337, '127.0.0.1');
