import React, { Component } from "react";
import RoomInfo from "../components/RoomInfo";
import RoomUserList from "../components/RoomUserList";
import MessageList from "../components/MessageList";
import MessageForm from "../components/MessageForm";

class ChatPage extends Component {
 constructor(props) {
  super(props);

  this.state = {
   roomInfo: "",
   users: [],
   messages: [],
   message: "",
   username: ""
  };
 }

 componentDidMount() {
  this.setState({
   roomInfo: "",
   users: [],
   messages: [],
   message: "",
   username: this.props.username
  });

  console.log(this.state);
 }

 render() {
  return (
   <>
    <div className="row">
     <RoomInfo />
    </div>
    <div className="row" style={{ height: "40em" }}>
     <MessageList />
     <RoomUserList />
    </div>
    <div className="row">
     <MessageForm />
    </div>
   </>
  );
 }
}

export default ChatPage;
