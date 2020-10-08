import React from "react";
import RoomUser from "./RoomUser";

function RoomUserList(props) {
 const users = [1, 2, 3, 4, 5];

 return (
  <div className="col-2 mr-2 bg-light text-dark">
   <h3>Users</h3>
   {users.map(user =>
    <RoomUser key={user.toString()} />
   )}
  </div>
 );
}

export default RoomUserList;
