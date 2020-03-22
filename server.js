const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const data = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true
})

server.get("/", function(req, res) {
    return res.render("index", { items: data})
})

server.get("/about", function(req, res) {
  return res.render("about")
})

server.get("/recipes", function(req, res) {
  return res.render("recipes", { items: data})
})

server.get("/recipes/:index", function (req, res) {
  const recipe = data;
  const recipeIndex = req.params.index;
  return res.render("recipe", { items: recipe[recipeIndex]})

})




server.get("/admin", function(req, res) {
  return res.render("admin/admin", { items: data})
})


server.get("/admin/recipes/:index", function (req, res) {
  const recipe = data;
  const recipeIndex = req.params.index;
  return res.render("admin/show", { items: recipe[recipeIndex]})

})

server.get("/admin/create", function(req, res) {
  return res.render("admin/create")
})



server.listen(5000, function() {
  console.log("server is running")
})