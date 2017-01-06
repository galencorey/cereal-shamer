import React from 'react'
import WhoAmI from './WhoAmI'

export default class UsersList extends React.Component{
  constructor(props){
    super();
  }

  render(){
    return (
      <div>
        <WhoAmI />
        <p>Check out this cool list of users!</p>
      </div>
    )
  }
}

