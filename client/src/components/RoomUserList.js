import React from "react";
import RoomUser from "./RoomUser";

function RoomUserList(props) {
 const users = [1, 2, 3, 4, 5];

 return (
  <div>
   <h3>Users</h3>
   {users.map(user =>
    <RoomUser key={user.toString()} />
   )}
  </div>
 );
}

export default RoomUserList;
