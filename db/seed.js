const db = require('APP/db')

const seedUsers = () => db.Promise.map([
  {name: 'Galen', email: 'galen@example.com', password: '1234', photo: './images/galen.jpg'},
  {name: 'Ally', email: 'ally@example.com', password: '1234', photo: './images/ally.jpg'},
  {name: 'Scout', email: 'scout@example.com', password: '1234', photo: './images/scout.jpg'},
  {name: 'Jeff', email: 'jeff@example.com', password: '1234', photo: './images/jeff.jpg'},
], user => db.model('users').create(user))

const seedCereals = () => db.Promise.map([
  {name: 'Honey Comb'},
  {name: 'Fruity Pebbles'},
  {name: 'Cinnamon Toast Crunch'},
  {name: "Reese's Puffs"},
  {name: 'Abominable Combo'},
  {name: 'Mystery Flavor'}
], cereal => db.model('cereals').create(cereal))

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .then(seedCereals)
  .then(cereals => console.log(`Seeded ${cereals.length} users OK`))
  .catch(error => console.error(error))
  .finally(() => db.close())
