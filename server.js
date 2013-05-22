var express = require('express'),
    server  = express();

server.use(express.static(__dirname + '/app'));

server.listen(8888);