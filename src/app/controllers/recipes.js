const Recipes = require('../models/Recipes')

module.exports = {
  index(req, res) {
    Recipes.all(function(recipes) {
    return res.render("index", { items: recipes})
    })
  },
  about(req, res) {
    return res.render("about")
  },

  recipes(req, res) {
    Recipes.all(function(recipes) {
    return res.render("recipes", { items: recipes})
    })
  },
  recipe(req, res) {
    Recipes.find(req.params.id, function(recipe) {
      if (!recipe) return res.send("Recipe not found!")

    return res.render("recipe", { items: recipe })
    })
  }
}


