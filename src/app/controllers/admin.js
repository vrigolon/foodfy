// const fs = require('fs')
// const data = require("../../../data.json")
const Recipes = require('../models/Recipes')



exports.index = function(req, res) {
    Recipes.all(function(recipes) {
      return res.render("admin/admin", { items: recipes })

    })
}


exports.recipe = function (req, res) {
  Recipes.find(req.params.id, function(recipe) {
    if (!recipe) return res.send("Recipe not found!")

    const recipeIndex = req.params.index;
    return res.render("admin/show", { items: recipe, recipeIndex })
  })
}
  
exports.create = function(req, res) {

  return res.render("admin/create")
}


exports.post = function(req,res) {
  const keys = Object.keys(req.body)
  for(key of keys) {
    if(req.body[key] == "") {
      return res.send('Please, fill all fields!')
    }
  }
  
 
  Recipes.create(req.body, function() {
    return res.redirect("/admin")
  })
}


exports.edit = function (req, res) {
  Recipes.find(req.params.id, function(recipe) {
    if (!recipe) return res.send("Recipe not found!")
      
      const recipeIndex = req.params.id;
      return res.render("admin/edit", { items: recipe, recipeIndex})
    
  })
  
  
}









exports.put = function(req,res) {
  const keys = Object.keys(req.body)
  const recipeId = req.params.id;
  
  // for(key of keys) {
  //   if(req.body[key] == "") {
  //     return res.send('Please, fill all fields!')
  //   }
  // }
  
  Recipes.update(req.body, function() {
    return res.redirect(`/admin/recipes/${recipeId}`)
  })
}

exports.delete = function(req,res) {
  Recipes.delete(req.body.id, function() {  
    return res.redirect(`/admin`)
  })
}