import React from "react";
import Container from "../components/Container";
import RoomInfo from "../components/RoomInfo";
import RoomUserList from "../components/RoomUserList";
import MessageList from "../components/MessageList";
import MessageForm from "../components/MessageForm";

function ChatPage(props) {
 return (
  <Container>
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
  </Container>
 );
}

export default ChatPage;
