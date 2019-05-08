import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "max", age: 28 },
      { name: "min", age: 14 },
      { name: "chin", age: 34 }
    ]
  };

  switchNameHandler = () => {
    //never alter state so use setState
    this.setState({
      persons: [
        { name: "maximullen", age: 38 },
        { name: "min", age: 14 },
        { name: "chinnianneee", age: 44 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi I am a react App</h1>
        <button onClick={this.switchNameHandler}>switch name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
    //return React.createElement("div", {className: "App"}, React.createElement("h1", null, "Does this work now"));
  }
}

export default App;
