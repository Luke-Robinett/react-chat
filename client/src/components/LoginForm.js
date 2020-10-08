import React from "react";

function LoginForm(props) {
 return (
  <form>
   <p>
    <label htmlFor="username">
     username
   </label>
    <br />
    <input type="text" id="username" />
   </p>
   <p>
    <select>
     <option>Choose a room...</option>
     <option>General Chat</option>
     <option>Computers</option>
     <option>Music</option>
    </select>
   </p>
   <p>
    <input type="submit" value="Start Chatting" />
   </p>
  </form>
 );
}

export default LoginForm;
