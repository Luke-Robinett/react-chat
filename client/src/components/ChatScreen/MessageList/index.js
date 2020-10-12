import React, { Component } from "react";
import Message from "./Message";

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.lastDiv = React.createRef();
  }

  componentWillReceiveProps() {
    this.lastDiv.current.scrollIntoView(false);
  }

  render() {
    return (
      <main
        className="col room-element mr-sm-1 mr-lg-2 message-list overflow-auto"
        role="list"
        aria-live="polite"
      >
        {
          this.props.messages.map((message, index) =>
            <Message
              key={index.toString()}
              message={message}
            />
          )
        }
        <div ref={this.lastDiv}>&nbsp;</div>
      </main >
    );
  }
}

export default MessageList;
