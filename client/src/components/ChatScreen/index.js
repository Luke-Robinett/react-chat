import React, { Component } from "react";
import RoomHeader from "./RoomHeader";
import UserList from "./UserList";
import MessageList from "./MessageList";
import Composer from "./Composer";
import io from "socket.io-client";

class ChatScreen extends Component {
 constructor(props) {
  super(props);

  this.socket = {};
  this.me = {
   id: "",
   name: this.props.username
  };

  this.state = {
   users: [],
   messages: [],
   messageText: ""
  };
 }

 handleCompose = event => {
  this.setState({ messageText: event.target.value });
 };

 handleKeyUp = event => {
  if (event.keyCode === 13) {
   this.handleSendMessage(event);
  }
 };

 handleSendMessage = event => {
  event.preventDefault();

  const newMessage = {
   user: this.me,
   text: this.state.messageText
  };

  this.socket.emit("message", newMessage);
  this.setState({ messageText: "" });
 };

 componentDidMount() {
  // Establish a socket connection
  this.socket = io();

  // Add socket ID to current user's info
  this.socket.on("connect", () => this.me.id = this.socket.id);

  console.log(this.me);

  // socket.io event handlers
  this.socket.on("message", message => {
   this.setState({ messages: [...this.state.messages, message] });
  });

  this.socket.on("users", newUserList => {
   this.setState({ users: newUserList });
  });

  this.socket.on("history", newMessageList => {
   this.setState({ messages: newMessageList });
  });

  // Tell the server we've joined the chat
  this.socket.emit("join", this.me);
 }

 componentWillUnmount() {
  // Tell the server we're heading out
  this.socket.close();
 }

 render() {
  return (
   <div className="bg-secondary">
    <div className="row">
     <RoomHeader />
    </div>
    <div className="row" style={{ height: "40em" }}>
     <MessageList
      messages={this.state.messages}
     />
     <UserList
      users={this.state.users}
     />
    </div>
    <div className="row">
     <Composer
      onChange={this.handleCompose}
      onSend={this.handleSendMessage}
      onKeyUp={this.handleKeyUp}
      user={this.me}
      text={this.state.messageText}
     />
    </div>
   </div>
  );
 }
}

export default ChatScreen;
