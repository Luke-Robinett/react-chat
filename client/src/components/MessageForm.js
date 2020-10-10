import React from "react";

function MessageForm(props) {
 return (
  <div className="col p-2">
   <div className="row">
    <div className="col-1">
     <label htmlFor="messageText">Message: </label>
    </div>
    <div className="col">
     <input
      type="text"
      className="w-100"
      id="messageText"
      autoFocus
     />
    </div>
    <div className="col-1">
     <button id="sendButton">Send</button>
    </div>
   </div>
  </div>
 );
}

export default MessageForm;
