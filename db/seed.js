const db = require('APP/db')

const seedUsers = () => db.Promise.map([
  {name: 'Trump', email: 'god@example.com', password: '1234', photo: 'https://themighty.com/wp-content/uploads/2016/09/Donald_J._Trump_at_Marriott_Marquis_NYC_September_7th_2016_3a-100x100.jpg?v=1476740929'},
  {name: 'Barack Obama', email: 'barack@example.gov', password: '1234', photo: 'http://i1.kym-cdn.com/entries/icons/original/000/008/287/obama.jpg'},
], user => db.model('users').create(user))

const seedCereals = () => db.Promise.map([
  {name: 'Honey Comb'},
  {name: 'Fruity Pebbles'},
  {name: 'Cinnamon Toast Crunch'},
  {name: "Reese's Puffs"}
], cereal => db.model('cereals').create(cereal))

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .then(seedCereals)
  .then(cereals => console.log(`Seeded ${cereals.length} users OK`))
  .catch(error => console.error(error))    
  .finally(() => db.close())
