import { combineReducers } from 'redux'

const rootReducer = combineReducers({

  auth: require('./auth').default, 
  deaths: require('./deaths').default 
  users: require('./users').default

})

export default rootReducer
