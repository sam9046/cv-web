/**
 * Create a proxy server for returning multiple applications
 * @type {*|exports|module.exports}
 */
var httpProxy = require('http-proxy'),
    http = require('http'),
    express = require('express');

var app = express();
var proxy = httpProxy.createProxyServer();

// Set up proxy server
httpProxy.createProxyServer({target:'http://localhost:9005'}).listen(8000);

app.use('/', express.static(__dirname + '/views'));
app.use('/angular2', express.static(__dirname + '/views/angular2'));
app.listen(9005, function() {
    console.log('app listening on port 9005');
});