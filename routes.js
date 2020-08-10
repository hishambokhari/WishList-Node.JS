
var data = {
  name: "hisham",
  status: "programmer"
}

module.exports = (app)=>{
  // index route
app.get('/', (req,res)=>{
  res.render('home', {data:data})
})

// about route

app.get('/about', (req,res)=>{
  res.render("About")
})

}


