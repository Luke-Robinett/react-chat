import React, { Component } from "react";
import Header from "./Header";
import LoginScreen from "./LoginScreen";
import ChatScreen from "./ChatScreen";

class Container extends Component {
 constructor(props) {
  super(props);

  this.state = {
   usernameValue: "",
   roomName: "General Chat",
   showStart: true
  };
 }

 handleUsernameChange = event => {
  this.setState({ usernameValue: event.target.value });
 }

 handleRoomChange = event => {
  this.setState({ roomName: event.target.value });
 }

 handleSubmit = event => {
  event.preventDefault();
  this.setState({ showStart: false });
 }

 render() {
  return (
   <div className="container">
    <Header />
    {this.state.showStart
     ? <LoginScreen
      usernameValue={this.state.usernameValue}
      onUsernameChange={this.handleUsernameChange}
      onRoomChange={this.handleRoomChange}
      onSubmit={this.handleSubmit}
     />
     : <ChatScreen
      username={this.state.usernameValue}
      roomName={this.state.roomName}
     />
    }
   </div>
  );
 }
}

export default Container;
