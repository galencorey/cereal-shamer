import React from 'react'
import WhoAmI from './WhoAmI'

export default class UsersList extends React.Component{
  constructor(props){
    super();

  }

  render(){
    this.props.users = [{name: "Galen"}]
    return (
      <div>
        <WhoAmI />
        <p>Check out this cool list of users!</p>
        <ul class="list-group">
          {this.props.users && this.props.users.map(user=>{
            return <li className="list-group-item">{user.name}</li>
          })}
        </ul>
      </div>
    )
  }
}

