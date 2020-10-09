import React from "react";

function LoginForm(props) {
  return (
    <form
      onSubmit={props.onSubmit}
    >
      <p>
        <label>
          username
          <br />
          <input
            type="text"
            id="username"
            name="username"
            value={props.usernameValue}
            onChange={props.onUsernameChange}
          />
        </label>
      </p>
      <p>
        <label>
          Room
          <br />
          <select>
            <option>General Chat</option>
          </select>
        </label>
      </p>
      <p>
        <input
          type="submit"
          className="btn-lg btn-primary"
          value="Start Chatting"
        />
      </p>
    </form>
  );
}

export default LoginForm;
