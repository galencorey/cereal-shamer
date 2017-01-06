import axios from 'axios'

export default function reducer (state = [], action) {
  switch(action.type) {
    case RECIEVE_USERS:
      return action.users;

    default:
      return state;
  }
}

const RECIEVE_USERS = 'RECIEVE_USERS'

export const recieveUsers = users => ({
  type: RECIEVE_USERS,
  users
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
