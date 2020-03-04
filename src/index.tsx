import * as React from 'react'
import { Component } from 'react'
import { render } from 'react-dom'
import UserContext, { UserProvider } from './UserContext'
import { HomePage } from './HomePage';
// import './index.css'
type State = {
username: string
login: boolean
userInfo: Object
};

class App extends React.Component<{}, State> {
  constructor(props) {
    super(props);
 
    this.state = {
      username: "userTest",
      login: false,
      userInfo: {name: "chick",surname: "ky",role: "Manager"}
    };
  }

  render() {
    const value = {username: this.state.username,login: this.state.login,info: this.state.userInfo}
    return (    
    <UserProvider value={value}>
      <h1>Hello World!</h1>
      <HomePage/>
      </UserProvider >
      )

  }
}

render(<App />, document.getElementById('root'))