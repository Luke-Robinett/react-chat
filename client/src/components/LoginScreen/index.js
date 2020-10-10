import React from "react";

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
      <form
        autoComplete="off"
        onSubmit={props.onSubmit}
      >
        <p>
          <label>
            username
          <br />
            <input
              type="text"
              maxLength="12"
              pattern="^[a-zA-Z][a-zA-Z0-9_]{1,12}$"
              title="2 to 12 characters long, letters, numbers and underscores allowed"
              required
              value={props.usernameValue}
              onChange={props.onUsernameChange}
            />
          </label>
        </p>
        <p>
          <label>
            Room
          <br />
            <select
              required
              onChange={props.onRoomChange}
            >
              <option>General Chat</option>
              <option>Boring Chat</option>
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
    </>
  );
}

export default StartPage;
