const Recipes = require('../models/Recipes')


exports.index = function(req, res) {
  Recipes.all(function(recipes) {
  return res.render("index", { items: recipes})
  })
}

exports.about = function(req, res) {
  return res.render("about")
}

exports.recipes = function(req, res) {
  Recipes.all(function(recipes) {
  return res.render("recipes", { items: recipes})
  })
}

exports.recipe = function (req, res) {
  Recipes.find(req.params.id, function(recipe) {
    if (!recipe) return res.send("Recipe not found!")

  return res.render("recipe", { items: recipe })
  })
}


