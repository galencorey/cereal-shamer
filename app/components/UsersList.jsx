import React from 'react';
import WhoAmI from './WhoAmI';
import { connect } from 'react-redux';


export class UsersList extends React.Component{
  constructor(props){
    super();
  }
  render(){
    return (
      <div className="container">
        <WhoAmI />
        <p>Check out this cool list of users!</p>
        <ul className="list-group col-xs-12">
          {this.props.users && this.props.users.map(user=>{
            return (
              <li className="list-group-item" key={user.id}>
                <img src={user.photo} alt={user.name}/>
                <span>{user.name}</span>
                <span className="badge">{user.count}</span>
              </li>)
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.users
})

export default connect (mapStateToProps)(UsersList)
