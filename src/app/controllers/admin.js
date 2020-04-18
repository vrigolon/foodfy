// const fs = require('fs')
// const data = require("../../../data.json")
const Recipes = require('../models/Recipes')



module.exports = {
  index(req, res) {
      Recipes.all(function(recipes) {
        return res.render("admin/recipes/index", { items: recipes })

      })
  },
  recipe(req, res) {
      Recipes.find(req.params.id, function(recipe) {
        if (!recipe) return res.send("Recipe not found!")
    
        const recipeIndex = req.params.index;
        return res.render("admin/recipes/show", { items: recipe, recipeIndex })
      })
  },
  create(req, res) {

    return res.render("admin/recipes/create")
  },
  post(req,res) {
    const keys = Object.keys(req.body)
    for(key of keys) {
      if(req.body[key] == "") {
        return res.send('Please, fill all fields!')
      }
    }

    Recipes.create(req.body, function() {
      return res.redirect("/admin")
    })
  },
  edit(req, res) {
    Recipes.find(req.params.id, function(recipe) {
      if (!recipe) return res.send("Recipe not found!")
        
        const recipeIndex = req.params.id;
        return res.render("admin/recipes/edit", { items: recipe, recipeIndex})
      
    })  
  },
  put(req,res) {
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
  },
  delete(req,res) {
    Recipes.delete(req.body.id, function() {  
      return res.redirect(`/admin`)
    })
  }
}