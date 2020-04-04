const data = require("../../../data.json")

exports.index = function(req, res) {
  return res.render("index", { items: data.recipes})
}

exports.about = function(req, res) {
  return res.render("about")
}

exports.recipes = function(req, res) {
  return res.render("recipes", { items: data.recipes})
}

exports.recipe = function (req, res) {
  const recipe = data.recipes;
  const recipeIndex = req.params.index;
  return res.render("recipe", { items: recipe[recipeIndex]})

}


