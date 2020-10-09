import React from "react";

function LoginForm(props) {
  return (
    <form
      onSubmit={props.onSubmit}
    >
      <p>
        <label htmlFor="username">
          username
        </label>
        <br />
        <input
          type="text"
          id="username"
          name="username"
          value={props.usernameValue}
          onChange={props.onUsernameChange}
        />
      </p>
      <p>
        <select>
          <option>General Chat</option>
        </select>
      </p>
      <p>
        <input
          type="submit"
          value="Start Chatting"
        />
      </p>
    </form>
  );
}

export default LoginForm;
