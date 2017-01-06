'use strict'

const db = require('APP/db')
const api = module.exports = require('express').Router()

api
  .get('/heartbeat', (req, res) => res.send({ok: true,}))
  .use('/auth', require('./auth'))
  .use('/users', require('./users'))
  .use('/cereals', require('./cereals'))

// Send along any errors
api.use((err, req, res, next) => {
  res.status(500).send('in the error handler')
})

// No routes matched? 404.
api.use((req, res) => res.status(404).end())
