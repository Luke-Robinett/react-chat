import React from "react";

function Message(props) {
 return (
  <div role="listitem">
   <span className="message">
    {props.message.user.name}:
   </span>
   {props.message.text}
  </div>
 );
}

export default Message;
