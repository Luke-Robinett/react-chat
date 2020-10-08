import React from "react";
import Container from "../components/Container";
import RoomInfo from "../components/RoomInfo";
import RoomUserList from "../components/RoomUserList";
import MessageList from "../components/MessageList";
import MessageForm from "../components/MessageForm";

function ChatPage(props) {
 return (
  <Container>
   <RoomInfo />
   <RoomUserList />
   <MessageList />
   <MessageForm />
  </Container>
 );
}

export default ChatPage;
