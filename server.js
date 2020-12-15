var http = require('http');

var args = process.argv.splice(2);
port = args[0];
console.log('listen port is %s',port);

http.createServer(function(req,res){
	res.writeHead(200,{'content-type':'text/plain'});
	res.end(port+'\n');
}).listen(port);

console.log('server runing at 127.0.0.1:%s\n',port);