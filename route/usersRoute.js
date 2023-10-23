const express = require('express')

const routerUsers = express.Router();

routerUsers.get('/users', (req, res) => {
  const {limit, offset} = req.query;
  if( limit && offset) {
    res.json({
      limit,
      offset,
    })
  } else {
    res.send(`don't will params`)
  }
})

module.exports = routerUsers;
