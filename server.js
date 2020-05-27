var express = require('express');
var data = require('./data/test.json');

var app = express();
const PORT = 3000;

app.set('view engine', 'ejs'); //set views to ejs 

//this is how a route is built in express
app.get('/',(req,res)=>{
  var title = "Our Home Page";
  res.render('pages/index', {title:title});
});

app.get('/users',(req,res)=>{
  var title = "Our Home Page";
  res.render('pages/index', {
    title:title,
    users: data
  });
});

//app.listen(3000);

app.listen(PORT,()=>{
  console.log(`Hey Budd! App is running on port ${PORT}`);
  console.log(data);
});
