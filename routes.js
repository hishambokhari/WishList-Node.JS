module.exports = (app)=>{
  // index route
app.get('/', (req,res)=>{
  res.render('home')
})

// about route

app.get('/about', (req,res)=>{
  res.send("About route")
})
}


