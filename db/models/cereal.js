'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Cereal = db.define('cereals', {
  name: Sequelize.STRING, 
  votes: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  deaths: {
  	type: Sequelize.INTEGER, 
  	defaultValue: 0
  }
})

module.exports = Cereal