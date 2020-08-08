const express = require('express');
const path = require('path');
const app = express();
const port = 5000

//middleware
app.use(express.static('public'))

// import routes
require('./routes')(app);

app.set('view engine', 'ejs')

app.get('/profile/:id',(req,res)=>{
  res.send('You requested user number ' + req.params.id)
})

app.listen(port, ()=>{
  console.log("Server is running on port " + port)
})


