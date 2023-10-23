const express = require('express')
const productsRouter = require('./productsRoute')
const usersRequire = require('./usersRoute')
const categoryRequire = require('./categoryRoute')

function routesApi(app) {
  const router = express.Router();
  app.use('/api/v1', router)

  router.use('/products', productsRouter)
  router.use('/users', usersRequire)
  router.use('/category', categoryRequire)
}

module.exports = routesApi;
