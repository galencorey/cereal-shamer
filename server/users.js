'use strict'

const epilogue = require('./epilogue')
const db = require('APP/db')
const User = require('APP/db/models/user')
const UserCereals = db.models.UserCereals


const userRoutes = require('express').Router()

userRoutes.get('/', function(req, res, next){
	console.log('in expected route')
	User.findAll()
	.then(users => {
		res.json(users)
	})
	.catch(next)
})

userRoutes.get('/:userId/totalCount', function(req, res, next){
	UserCereals.findAndCountAll({
		where: {
			user_id: req.params.userId
		}
	})
	.then(result => {
		res.json(result)
	})
})

userRoutes.put('/:userId/addCereal/:cerealId', function(req, res, next){
	console.log("add cereal route")
	UserCereals.create({
		user_id: req.params.userId,
		cereal_id: req.params.cerealId
	})
	.then(() => {
		return User.findById(req.params.userId)
		.then(user => user.increment('shame'))
	})
	.then((user) => res.send(user))
})

userRoutes.get('/weekTotal', function(req, res, next){

})



module.exports = userRoutes

// Epilogue will automatically create standard RESTful routes
const users = epilogue.resource({
  model: db.model('users'),
  endpoints: ['/users', '/users/:id']
})

const {mustBeLoggedIn, selfOnly, forbidden} = epilogue.filters
users.delete.auth(mustBeLoggedIn)
users.delete.auth(selfOnly('delete'))
//users.list.auth()
users.read.auth(mustBeLoggedIn)
