import React from "react";
import User from "./User";

function UserList(props) {
 return (
  <div className="col-2 mr-2 bg-light text-dark">
   <h3>Users</h3>
   {props.users.map((user, index) =>
    <User
     key={index.toString()}
     user={user}
    />
   )}
  </div>
 );
}

export default UserList;
