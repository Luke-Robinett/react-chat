import React from "react";

function User(props) {
 return (
  <div role="listitem">
   <strong>
    {props.user.name}
   </strong>
  </div>
 );
}

export default User;
