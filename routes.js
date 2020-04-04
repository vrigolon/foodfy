const express = require('express')
const routes = express.Router()
const data = require("./data.json")
const fs = require('fs')


routes.get("/", function(req, res) {
  return res.render("index", { items: data.recipes})
})

routes.get("/about", function(req, res) {
return res.render("about")
})

routes.get("/recipes", function(req, res) {
return res.render("recipes", { items: data.recipes})
})

routes.get("/recipes/:index", function (req, res) {
const recipe = data.recipes;
const recipeIndex = req.params.index;
return res.render("recipe", { items: recipe[recipeIndex]})

})




routes.get("/admin", function(req, res) {
return res.render("admin/admin", { items: data.recipes})
})


routes.get("/admin/recipes/:index", function (req, res) {
const recipe = data.recipes;
const recipeIndex = req.params.index;
return res.render("admin/show", { items: recipe[recipeIndex], recipeIndex })

})

routes.get("/admin/create", function(req, res) {

return res.render("admin/create")
})

routes.get("/admin/edit/:index", function (req, res) {

const recipe = data.recipes;
const recipeIndex = req.params.index;
return res.render("admin/edit", { items: recipe[recipeIndex], recipeIndex})

})

routes.post("/admin/create", function(req,res) {
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


routes.put("/admin/edit/:index", function(req,res) {
const keys = Object.keys(req.body)
const recipeIndex = req.params.index;

for(key of keys) {
  if(req.body[key] == "") {
    return res.send('Please, fill all fields!')
  }
}

data.recipes[recipeIndex] = req.body


fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
  if (err) return res.send("Write file error")

  return res.redirect(`/admin/recipes/${recipeIndex}`)
})
})


module.exports = routes