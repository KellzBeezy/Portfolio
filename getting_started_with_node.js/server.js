var express = require('express');
var path = require('path');

//var fs = require('fs');

var exp = express();

exp.set('view engine', 'ejs');

exp.use('/assets', express.static('assets'));

exp.get('/about', function(req, res){
    //res.sendFile(path.join(__dirname,'../public/about.html'));
    res.render('about');
});
exp.get('/index', function(req, res){
    res.render('index');
    //res.sendFile(path.join(__dirname,'../public/about.html'));
});
exp.get('/', function(req, res){
    res.render('index');
    //res.sendFile(path.join(__dirname,'../public/about.html'));
});
exp.get('/contact', function(req, res){
    //res.render('index');
    res.sendFile(path.join(__dirname,'/public/error.html'));
});

exp.listen('8000');