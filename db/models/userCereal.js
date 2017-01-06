'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const UserCereal = db.define('UserCereals', {
  user_id: Sequelize.INTEGER,
  cereal_id: Sequelize.INTEGER
  }
)

module.exports = UserCereal