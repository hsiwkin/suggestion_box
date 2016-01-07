var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public/'));

var port = 6666;

app.listen(port);
console.log('server running at port ' + port);