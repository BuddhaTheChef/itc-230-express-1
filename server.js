var express = require('express');
var data = require('./data/test.json');

var app = express();
const PORT = 3000;

//this allows you to serve static pages
// app.use(express.static(__dirname));

//this is how a route is built in express
app.get('/',(req,res)=>{
  res.send(`Hey Budd! App is running on port ${PORT}`);
  res.json(data);
});

//app.listen(3000);

app.listen(PORT,()=>{
  console.log(`Hey Budd! App is running on port ${PORT}`);
  console.log(data);
});
