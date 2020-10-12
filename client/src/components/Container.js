import React, { Component } from "react";
import Header from "./Header";
import LoginScreen from "./LoginScreen";
import ChatScreen from "./ChatScreen";

class Container extends Component {
 constructor(props) {
  super(props);

  this.state = {
   usernameValue: "",
   showStart: true
  };
 }

 handleUsernameChange = event => {
  this.setState({ usernameValue: event.target.value });
 }

 handleSubmit = event => {
  event.preventDefault();
  this.setState({ showStart: false });
 }

 render() {
  return (
   <>
    {this.state.showStart
     ? <LoginScreen
      usernameValue={this.state.usernameValue}
      onUsernameChange={this.handleUsernameChange}
      onSubmit={this.handleSubmit}
     />
     : <ChatScreen
      username={this.state.usernameValue}
     />
    }
   </>
  );
 }
}

export default Container;
