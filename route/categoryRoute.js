const express = require('express')

const routerCategory = express.Router();

routerCategory.get('/', (req, res) => {
  res.json([
    {
      blue: true,
      green: false
    },
    {
      red: true,
      black: false,
    }
  ])
})

module.exports = routerCategory;
