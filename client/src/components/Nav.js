import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
 return (
  <nav>
   <Link to="/">Start</Link> |
   <Link to="/chat">Chat</Link>
  </nav>
 )
}

export default Nav;
