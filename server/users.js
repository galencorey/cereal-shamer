'use strict'

const epilogue = require('./epilogue')
const db = require('APP/db')
const User = require('APP/db/models/user')


const customUserRoutes = require('express').Router() 

customUserRoutes.get('/', function(req, res, next){
	User.findAll()
	.then(users => {
		res.json(users)
	})
})

customUserRoutes.get('/weekTotal', function(req, res, next){

})



module.exports = customUserRoutes

// Epilogue will automatically create standard RESTful routes
const users = epilogue.resource({
  model: db.model('users'),
  endpoints: ['/users', '/users/:id']
})

const {mustBeLoggedIn, selfOnly, forbidden} = epilogue.filters
users.delete.auth(mustBeLoggedIn)
users.delete.auth(selfOnly('delete'))
users.list.auth()
users.read.auth(mustBeLoggedIn)