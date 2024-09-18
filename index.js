const express = require('express');
const person = require('./routes/persons');
const app = express();
app.use(person)


app.listen(3000,(err)=>{
  if(err){
    console.log(err);
  }
  else{
    console.log("server is running on 3000");
  }
})