var express = require('express');
var app = express();
var path = require('path');

app.set('port', process.env.PORT || 5000);

app.use(express.static('public'));
app.use(express.static('public/views'));
app.use(express.static('public/scripts'));
app.use(express.static('public/styles'));
app.use(express.static('public/vendors'));

app.listen(app.get('port'), function(req, res, next) {
    console.log('Listening on port: ', app.get('port'));
});

module.exports = app;