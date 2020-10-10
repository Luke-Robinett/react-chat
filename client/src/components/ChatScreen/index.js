import React, { Component } from "react";
import RoomHeader from "./RoomHeader";
import UserList from "./UserList";
import MessageList from "./MessageList";
import Composer from "./Composer";

class ChatScreen extends Component {
 constructor(props) {
  super(props);

  this.me = {
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
 }

 handleKeyUp = event => {
  if (event.keyCode === 13) {
   this.handleSendMessage(event);
  }
 }

 handleSendMessage = event => {
  event.preventDefault();

  const newMessage = {
   user: this.me,
   text: this.state.messageText
  };
  const newMessageList = this.state.messages;
  newMessageList.push(newMessage);
  this.setState({
   messages: newMessageList,
   messageText: ""
  });
 }

 componentDidMount() {
  const newUserList = this.state.users;
  newUserList.push(this.me);
  this.setState({ users: newUserList });
 }

 render() {
  return (
   <div className="bg-secondary">
    <div className="row">
     <RoomHeader
      roomName={this.props.roomName}
     />
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
