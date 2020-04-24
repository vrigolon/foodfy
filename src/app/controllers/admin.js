const Recipes = require('../models/Recipes')
const Chefs = require('../models/Chefs')



module.exports = {
  index(req, res) {
      Recipes.all(function(recipes) {
        return res.render("admin/recipes/index", { items: recipes })

      })
  },
  recipe(req, res) {
      Recipes.find(req.params.id, function(recipe) {
        if (!recipe) return res.send("Recipe not found!")
    
        return res.render("admin/recipes/show", { items: recipe })
      })
  },
  create(req, res) {

    Recipes.chefSelectOptions(function(options) {
      
      return res.render("admin/recipes/create", { chefOptions: options })
    })


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
        
        Recipes.chefSelectOptions(function(options) {
        return res.render("admin/recipes/edit", { items: recipe, chefOptions: options})
      })
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
  },
  chefsIndex(req, res) {
    Chefs.all(function(chefs) {
    return res.render("admin/chefs/index", { items: chefs})
    })
  },
  createChef(req, res) {

    return res.render("admin/chefs/create")
  },
  postChef(req,res) {
    const keys = Object.keys(req.body)
    for(key of keys) {
      if(req.body[key] == "") {
        return res.send('Please, fill all fields!')
      }
    }

    Chefs.create(req.body, function() {
      return res.redirect("/admin/chefs")
    })
  },
  detailChef(req, res) {
    Chefs.find(req.params.id, function(chef) {
      if (!chef) return res.send("Chef not found!")
  
      return res.render("admin/chefs/show", { items: chef })
    })
  },
  editChef(req, res) {
    Chefs.find(req.params.id, function(chef) {
      if (!chef) return res.send("Chef not found!")
        
      
        
        return res.render("admin/chefs/edit", { items: chef})
      
    })  
  },
  putChef(req,res) {
    const keys = Object.keys(req.body)
    const chefId = req.params.id;
    
    // for(key of keys) {
    //   if(req.body[key] == "") {
    //     return res.send('Please, fill all fields!')
    //   }
    // }
    
    Chefs.update(req.body, function() {
      return res.redirect(`/admin/chefs/${chefId}`)
    })
  },
  deleteChef(req,res) {
    Chefs.delete(req.body.id, function() {  
      return res.redirect(`/admin/chefs`)
    })
  }
}