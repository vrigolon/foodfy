const express = require('express')
const routes = express.Router()
const index = require('./src/app/controllers/index')
const admin = require('./src/app/controllers/admin')


routes.get("/", index.index)
routes.get("/about", index.about)
routes.get("/recipes", index.recipes)
routes.get("/chefs", index.chefs)
routes.get("/recipes/:id", index.recipe)


routes.get("/admin", admin.index)
routes.get("/admin/recipes/:id", admin.recipe)
routes.get("/admin/create", admin.create)
routes.get("/admin/edit/:id", admin.edit)
routes.post("/admin/create", admin.post)
routes.put("/admin/edit/:id", admin.put)
routes.delete("/admin/recipe/:id", admin.delete)
routes.get("/admin/chefs", admin.chefs)



module.exports = routes