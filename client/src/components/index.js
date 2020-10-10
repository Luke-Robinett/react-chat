import React, { Component } from "react";
import Nav from "../components/Nav";
import StartPage from "../pages/StartPage";
import ChatPage from "../pages/ChatPage";

class Container extends Component {
 constructor(props) {
  super(props);

  this.state = {
   usernameField: "",
   roomName: "",
   showStart: true
  };

  this.handleUsernameChange = this.handleUsernameChange.bind(this);
  this.handleRoomChange = this.handleRoomChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
 }

 handleUsernameChange(event) {
  this.setState({ usernameField: event.target.value });
 }

 handleRoomChange(event) {
  this.setState({ roomName: event.target.value });
 }

 handleSubmit(event) {
  event.preventDefault();
  this.setState({ showStart: false });
 }

 render() {
  return (
   <div className="container" style={{ fontSize: "16px" }}>
    <Nav />
    {this.state.showStart
     ? < StartPage
      usernameValue={this.state.usernameField}
      onUsernameChange={this.handleUsernameChange}
      onRoomChange={this.handleRoomChange}
      onSubmit={this.handleSubmit}
     />
     : <ChatPage
      username={this.state.usernameField}
     />
    }
   </div>
  );
 }
}

export default Container;
