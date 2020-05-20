var express = require('express');
var app = express();

//this allows you to serve static pages
app.use(express.static(__dirname));

app.listen(3000);
