import React from 'react';
import WhoAmI from './WhoAmI';
import { connect } from 'react-redux';
import { sendShame } from '../reducers/users'

export class UsersList extends React.Component{
  constructor(props){
    super();
  }
  render(){
    return (
      <div className="container">
        <h1>Shame those cereal eaters!! </h1>
        <ul className="list-group col-xs-12">
          {this.props.users && this.props.users.map(user=>{
            return (
              <li className="list-group-item" key={user.id}>
                <img src={user.photo} alt={user.name} style={{width: 100}}/>
                <button className="btn btn-primary" style={{margin: 20}} onClick={() => {this.props.onBtnClick(user.id)}} >I saw {user.name} eating cereal!</button>
                <span className="badge" style={{textSize: 15,
                  margin: 40}}>{user.shame}</span>
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

const mapDispatchToProps = (dispatch) => {
  return {
    onBtnClick: (userId, cerealId) =>{
      dispatch(sendShame(userId, cerealId))
    }
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(UsersList)
