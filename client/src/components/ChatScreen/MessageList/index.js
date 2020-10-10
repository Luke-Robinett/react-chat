import React from "react";
import Message from "./Message";

function MessageList(props) {
  return (
    <main className="col mx-2 text-muted bg-light">
      <h3>Messages</h3>
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
