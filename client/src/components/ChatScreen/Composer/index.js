import React from "react";

function Composer(props) {
 return (
  <div className="col composer">
   <div className="row">
    <div className="col">
     <input
      type="text"
      className="w-100"
      id="messageText"
      autoFocus
      autoComplete="off"
      placeholder="Type your message..."
      value={props.text}
      onChange={props.onChange}
      onKeyUp={props.onKeyUp}
     />
    </div>
    <div className="col-4 col-sm-2 text-center">
     <button
      className="w-100"
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
