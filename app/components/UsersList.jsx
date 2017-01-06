import React from 'react'
import WhoAmI from './WhoAmI'

export default class UsersList extends React.Component{
  constructor(props){
    super();

  }

  render(){
    let users = [{id: 0, name: "Galen", count: 34}, {id: 1, name: "Scout", count: 4}]
    return (
      <div className="container">
        <WhoAmI />
        <p>Check out this cool list of users!</p>
        <ul className="list-group col-xs-12">
          {users && users.map(user=>{
            return (
              <li className="list-group-item" key={user.id}>
                <img src={user.image} alt={user.name}/>
                <span>{user.name}</span>
                <span className="badge">{user.count}</span>
              </li>)
          })}
        </ul>
      </div>
    )
  }
}

