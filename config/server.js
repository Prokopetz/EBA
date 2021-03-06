var express = require('express');
var server = require('express')();
var consign = require('consign')();

server.set('view engine', 'ejs');
server.set('views', './app/views');
server.use(express.static('./public/'));


consign.include('app/routes').then('config/database.js').into(server);

module.exports = server;
