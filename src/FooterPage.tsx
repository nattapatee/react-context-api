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

export class FooterPage extends React.Component<{}, State> {
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
    <h1>username : {this.context.username}</h1>
      )

  }
}

