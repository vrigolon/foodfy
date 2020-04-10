const express = require('express')
const routes = express.Router()
const recipes = require('./src/app/controllers/recipes')
const admin = require('./src/app/controllers/admin')


routes.get("/", recipes.index)
routes.get("/about", recipes.about)
routes.get("/recipes", recipes.recipes)
routes.get("/recipes/:id", recipes.recipe)


routes.get("/admin", admin.index)
routes.get("/admin/recipes/:id", admin.recipe)
routes.get("/admin/create", admin.create)
routes.get("/admin/edit/:id", admin.edit)
routes.post("/admin/create", admin.post)
routes.put("/admin/edit/:id", admin.put)
routes.delete("/admin/recipe/:id", admin.delete)


module.exports = routes