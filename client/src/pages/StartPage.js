import React, { Component } from "react";
import axios from "axios";
import LoginForm from "../components/LoginForm";

class StartPage extends Component {
 constructor(props) {
  super(props);

  this.state = {
   username: ""
  };
  this.onUsernameChange = this.onUsernameChange.bind(this);
  this.onSubmit = this.onSubmit.bind(this);
 }

 onUsernameChange(event) {
  this.setState({ username: event.target.value });
 }

 onSubmit(event) {
  event.preventDefault();
  axios.post("/api/login", { username: this.state.username })
   .then(response => {
    alert("Logged in!");
    console.log(response);
   })
   .catch(err => {
    if (err.response)
     alert(err.response.data);
    else
     alert("Unknown error.");
   });
 }

 render() {
  return (
   <>
    <h1>Welcome To Chat</h1>
    <hr />
    <p>
     <strong>
      Enter a username, choose a room and start chatting!
     </strong>
    </p>
    <LoginForm
     usernameValue={this.state.username}
     onUsernameChange={this.onUsernameChange}
     onSubmit={this.onSubmit}
    />
   </>
  );
 }
}

export default StartPage;
