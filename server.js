var express = require('express');
var app = express();
const PORT = 3000;

//this allows you to serve static pages
app.use(express.static(__dirname));

//app.listen(3000);

app.listen(PORT,()=>{
  console.log(`Hey Budd! App is running on port ${PORT}`);
});
