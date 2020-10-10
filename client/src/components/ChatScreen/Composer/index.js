import React from "react";

function Composer(props) {
 return (
  <div className="col p-2">
   <div className="row">
    <div className="col-1">
     <label className="text-light" htmlFor="messageText">{props.user.name}</label>
    </div>
    <div className="col">
     <input
      type="text"
      className="w-100"
      id="messageText"
      autoFocus
      placeholder="Type your message..."
      value={props.text}
      onChange={props.onChange}
      onKeyUp={props.onKeyUp}
     />
    </div>
    <div className="col-1">
     <button
      onClick={props.onSend}
     >
      Send
     </button>
    </div>
   </div>
  </div>
 );
}

export default Composer;
