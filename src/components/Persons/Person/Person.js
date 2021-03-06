import React, { Component } from "react";
import styleClasses from "./Person.css";

class Person extends Component {
  render() {
    console.log("[Person.js] rendering...");
    return (
      <div className={styleClasses.Person}>
        <p onClick={this.props.click}>
          I'am {this.props.name} & i am {this.props.age} years old
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    );
  }
}

export default Person;
