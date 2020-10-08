import React from "react";
import Message from "./Message";
import MessageForm from "./MessageForm";

function MessageList(props) {
  const messages = [1, 2, 3, 4, 5];

  return (
    <div>
      { messages.map(message =>
        <Message key={message.toString()} />
      )}
    </div>
  );
}

export default MessageList;
