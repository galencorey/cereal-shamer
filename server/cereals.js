'use strict'

const db = require('APP/db')
const Cereal = require('APP/db/models/cereal')
const UserCereals = db.models.UserCereals


const cerealRoutes = require('express').Router() 

cerealRoutes.get('/', function(req, res, next){
	Cereal.findAll()
	.then(cereals => {
		res.json(cereals)
	})
})

module.exports = cerealRoutes
