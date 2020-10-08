import React from "react";
import LoginForm from "../components/LoginForm";

function StartPage(props) {
 return (
  <>
   <h1>Welcome To Chat</h1>
   <hr />
   <p>
    <strong>
     Enter a username, choose a room and start chatting!
    </strong>
   </p>
   <LoginForm />
  </>
 );
}

export default StartPage;
