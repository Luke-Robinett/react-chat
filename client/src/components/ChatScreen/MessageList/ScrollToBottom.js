import React, { Component } from "react";

class ScrollToBottom extends Component {
 constructor(props) {
  super(props);

  this.divElement = React.createRef();
 }

 componentDidMount() {
  this.divElement.current.scrollIntoView(false);
 }

 render() {
  return (
   <div
    ref={this.divElement}
   >
    End Of Chat
   </div>
  );
 }
}

export default ScrollToBottom;
