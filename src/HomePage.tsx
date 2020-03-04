import * as React from 'react'
import { Component } from 'react'
import { render } from 'react-dom'
import UserContext, { UserConsumer } from './UserContext';
// import './index.css'
type State = {
username: string
login: boolean
userInfo: Object
};

export class HomePage extends React.Component<{}, State> {
static contextType = UserContext
  constructor(props) {
    super(props);
 
    this.state = {
      username: null,
      login: false,
      userInfo: {}
    };
  }
  componentDidMount = () => {
      console.log(this.context)
  }
  render() {
    return (    
        <div>
    <h1>username : {this.context.username}</h1>
    <UserConsumer>
        {props => {
          return <div>name : {props.info.name}<br />surname:{props.info.surname} </div>
        }}
      </UserConsumer>
    </div>
      )

  }
}

