import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default, 
  deaths: require('./deaths').default 
})

export default rootReducer
