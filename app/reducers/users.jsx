import axios from 'axios'

export default function reducer (state = [], action) {
  switch(action.type) {
    case RECIEVE_USERS:
      return action.users;
    case ADD_SHAME:
      if (state.users){
        let idx = state.users.map(user => user.id).indexOf(action.user.id);
        state.users[idx] = action.user;
        return state;
      } else {
        return state
      }

    default:
      return state;
  }
}

const RECIEVE_USERS = 'RECIEVE_USERS'
const ADD_SHAME = 'ADD_SHAME'

export const recieveUsers = users => ({
  type: RECIEVE_USERS,
  users
})

export const addShame = user => ({
  type: ADD_SHAME,
  user
})

export function fetchUsers () {
  return function (dispatch) {
    console.log('inside fetch users')
    return axios.get('/api/users')
    .then((response) => {
      console.log("inside response")
      console.log(response);
      const action = recieveUsers(response.data);
      return dispatch(action);
    })
    .catch(err => console.error(err.stack))
  }
}

export function sendShame (userId, cerealId=6) {
  return function (dispatch) {
    console.log('inside fetch users')
    return axios.put(`/api/users/${userId}/addCereal/${cerealId}`)
    .then((response) => {
      console.log("heres the response", response.data)
      const action = addShame(response.data);
      return dispatch(action);
    })
    .catch(err => console.error(err.stack))
  }
}

