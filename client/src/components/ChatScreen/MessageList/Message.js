import React from "react";

function Message(props) {
 return (
  <div>
   <strong>{props.message.user.name}</strong>, &nbsp;
   {props.message.text}
  </div>
 );
}

export default Message;
