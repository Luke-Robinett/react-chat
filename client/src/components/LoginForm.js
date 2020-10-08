import React from "react";

function LoginForm(props) {
 return (
  <form>
   <label htmlFor="username">
    username
   </label>
   <br />
   <input type="text" id="username" />
   <br />
   <input type="submit" value="Start Chatting" />
  </form>
 );
}

export default LoginForm;
