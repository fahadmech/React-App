import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "max", age: 28 },
      { name: "min", age: 14 },
      { name: "chin", age: 34 }
    ],
    showPersons: true
  };

  switchNameHandler = newName => {
    //never alter state so use setState
    this.setState({
      persons: [
        { name: newName, age: 38 },
        { name: "min", age: 14 },
        { name: "chinnianneee", age: 44 }
      ]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: "Max", age: 28 },
        { name: event.target.value, age: 14 },
        { name: "chinnianneee", age: 34 }
      ]
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "white",
      border: "1px solid blue",
      font: "inherit",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={() => this.switchNameHandler("max!!!!!")}
            changed={this.nameChangedHandler}
          >
            My Hobbies: Racing
          </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          />
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi I am a react App</h1>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
    //return React.createElement("div", {className: "App"}, React.createElement("h1", null, "Does this work now"));
  }
}

export default App;
