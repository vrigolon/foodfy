const express = require('express')
const nunjucks = require('nunjucks')

const methodOverride = require('method-override')
const fs = require('fs')


const server = express()
const data = require("./data.json")

server.use(express.urlencoded({extended: true}))
server.use(express.static('public'))
server.use(methodOverride('_method'))


server.set("view engine", "njk")

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true
})

server.get("/", function(req, res) {
    return res.render("index", { items: data.recipes})
})

server.get("/about", function(req, res) {
  return res.render("about")
})

server.get("/recipes", function(req, res) {
  return res.render("recipes", { items: data.recipes})
})

server.get("/recipes/:index", function (req, res) {
  const recipe = data.recipes;
  const recipeIndex = req.params.index;
  return res.render("recipe", { items: recipe[recipeIndex]})

})




server.get("/admin", function(req, res) {
  return res.render("admin/admin", { items: data.recipes})
})


server.get("/admin/recipes/:index", function (req, res) {
  const recipe = data.recipes;
  const recipeIndex = req.params.index;
  return res.render("admin/show", { items: recipe[recipeIndex]})

})

server.get("/admin/create", function(req, res) {

  return res.render("admin/create")
})


server.post("/admin/create", function(req,res) {
  const keys = Object.keys(req.body)
  for(key of keys) {
    if(req.body[key] == "") {
      return res.send('Please, fill all fields!')
    }
  }

  let { image, title, author, ingredients, preparation, information } = req.body


  
  data.recipes.push({
    image,
    title,
    author,
    ingredients,
    preparation,
    information
  })

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
    if (err) return res.send("Write file error")
  
    return res.redirect("/admin")
  })
})



server.listen(5000, function() {
  console.log("server is running")
})