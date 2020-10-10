import React, { Component } from "react";
import Nav from "../components/Nav";
import StartPage from "../pages/StartPage";
import ChatPage from "../pages/ChatPage";

class Container extends Component {
 constructor(props) {
  super(props);

  this.state = {
   username: "",
   roomName: "",
   showStart: true
  };

  this.handleUsernameChange = this.handleUsernameChange.bind(this);
  this.handleRoomChange = this.handleRoomChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
 }

 handleUsernameChange(event) {
  this.setState({ username: event.target.value });
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
      username={this.state.username}
      onUsernameChange={this.handleUsernameChange}
      onRoomChange={this.handleRoomChange}
      onSubmit={this.handleSubmit}
     />
     : <ChatPage />
    }
   </div>
  );
 }
}

export default Container;
