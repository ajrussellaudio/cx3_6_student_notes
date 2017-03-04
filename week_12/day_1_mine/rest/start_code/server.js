var express = require('express');
var bodyParser = require('body-parser');
var CatApi = require('./catApi');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen( 3000, function() {
  new CatApi( app );
  console.log( 'App running' );
});