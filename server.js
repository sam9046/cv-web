/**
 * Create a proxy server for returning multiple applications
 * @type {*|exports|module.exports}
 */
var httpProxy = require('http-proxy'),
    http = require('http');

var proxy = httpProxy.createProxyServer();

// Set up proxy server
httpProxy.createProxyServer({target:'http://localhost:9005/angular2'}).listen(8000);

// Create server
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('request successfully proxied!' + '\n' + JSON.stringify(req.headers, true, 2));
    res.end();
}).listen(9005);