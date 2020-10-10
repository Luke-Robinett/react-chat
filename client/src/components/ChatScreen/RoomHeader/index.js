import React from "react";

function RoomHeader(props) {
 return (
  <div className="col text-light">
   <h1>{props.roomName}</h1>
  </div>
 );
}

export default RoomHeader;
