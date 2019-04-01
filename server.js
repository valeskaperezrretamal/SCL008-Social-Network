//archivo 
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/src'));

app.get('/',function(request, response){
  response.sendFile(__dirname + '/index.html');
});

const port = process.env.PORT || 3000
app.listen(port, function(){
  console.log('Server Express Ready!');
});