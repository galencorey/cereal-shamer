'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import UsersList from './components/UsersList'

import {fetchUsers} from './reducers/users.jsx'

const ExampleApp = connect(
  ({ auth }) => ({ user: auth })
) (
  ({ user, children }) =>
    <div>
      <nav>
        {user ? <WhoAmI /> : <Login/>}
      </nav>
      {children}
    </div>
)

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={ExampleApp}>
      </Route>
      <Route path="/users" component={UsersList} onEnter={onUsersEnter}/>
    </Router>
  </Provider>,
  document.getElementById('main')
)

function onUsersEnter () {
  console.log("in onUsersEnter")
  const thunk = fetchUsers();
  store.dispatch(thunk)
}
