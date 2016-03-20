var express = require('express');
var app = express();
var portfinder = require('portfinder');
var log = require('npmlog');
var config = require('./config.js');

app.use(express.static('../client'));

portfinder.getPort(function(err, port){
  app.listen(port, function(){
    log.info('Listening on port ' + port);
  });
});



