const fs = require('fs')
const data = require("../../../data.json")


exports.index = function(req, res) {
  return res.render("admin/admin", { items: data.recipes})
}

exports.recipe = function (req, res) {
  const recipe = data.recipes;
  const recipeIndex = req.params.index;
  return res.render("admin/show", { items: recipe[recipeIndex], recipeIndex })
  
}

exports.create = function(req, res) {

  return res.render("admin/create")
}

exports.edit = function (req, res) {

  const recipe = data.recipes;
  const recipeIndex = req.params.index;
  return res.render("admin/edit", { items: recipe[recipeIndex], recipeIndex})
  
}

exports.post = function(req,res) {
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
}

exports.put = function(req,res) {
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
}

exports.delete = function(req,res) {
  const recipeIndex = req.params.index;
  
  data.recipes.splice(recipeIndex, 1)
  
  
  fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
    if (err) return res.send("Write file error")
  
    return res.redirect(`/admin`)
  })
}