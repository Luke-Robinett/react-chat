import React from "react";

function MessageForm(props) {
 return (
  <div>
   <label htmlFor="messageText">Message: </label>
   <input type="text" id="messageText" />
   <button id="sendButton">Send</button>
  </div>
 );
}

export default MessageForm;
