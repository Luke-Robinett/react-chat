import React, { Component } from "react";

class Container extends Component {
 constructor(props) {
  super(props);
 }

 render() {
  return (
   this.props.children
  );
 }
}

export default Container;
