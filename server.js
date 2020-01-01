const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '', 'map_sample.html'));
});

var port = 3030

console.log('Map page server at: ' + port.toString())
app.listen(port);