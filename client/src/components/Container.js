import React, { Component } from "react";

class Container extends Component {
 constructor(props) {
  super(props);
 }

 render() {
  return (
   <div className="my-2 bg-secondary">
    {this.props.children}
   </div>
  );
 }
}

export default Container;
