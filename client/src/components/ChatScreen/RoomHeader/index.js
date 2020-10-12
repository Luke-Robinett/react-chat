import React from "react";

function RoomHeader(props) {
 return (
  <div className="row room-background p-1 p-sm-2 p-md-3">
   <div className="col ">
    <h3>Messages</h3>
   </div>
   <div className="d-none d-sm-block col-sm-4 col-lg-2">
    <h3>Users</h3>
   </div>
  </div>
 );
}

export default RoomHeader;
