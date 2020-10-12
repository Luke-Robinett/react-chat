import React from "react";
import User from "./User";

function UserList(props) {
 return (
  <aside
   className="d-none d-sm-block col-sm-4 col-lg-2 room-element overflow-auto"
   role="list"
  >
   {props.users.map((user, index) =>
    <User
     key={index.toString()}
     user={user}
    />
   )}
  </aside>
 );
}

export default UserList;
