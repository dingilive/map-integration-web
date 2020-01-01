const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '', 'map_apis.html'));
});

app.get('/mapview', function(req, res) {
  res.sendFile(path.join(__dirname, '', 'map_view.html'));
});

var port = 3030

console.log('Running server at: ' + port.toString())
app.listen(port);