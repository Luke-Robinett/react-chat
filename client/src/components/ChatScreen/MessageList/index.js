import React from "react";
import Message from "./Message";

function MessageList(props) {
  return (
    <main
      className="col room-element mr-sm-1 mr-lg-2 message-list overflow-auto"
      role="list"
      aria-live="polite"
    >
      {props.messages.map((message, index) =>
        <Message
          key={index.toString()}
          message={message}
        />
      )}
    </main>
  );
}

export default MessageList;
