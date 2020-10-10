import React from "react";
import RoomInfo from "../components/RoomInfo";
import RoomUserList from "../components/RoomUserList";
import MessageList from "../components/MessageList";
import MessageForm from "../components/MessageForm";

function ChatPage(props) {
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

export default ChatPage;
