import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      {id: 'sdfdsfds', name: "Aldo", age: 45 },
      {id: 'dcdscsd', name: "Jacksie", age: 22.5 },
      {id: 'scsdcsd', name: "John", age: 11.25 },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  // switchNameHandler = (newName) => {
  //   // console.log('Was clicked!');
  //   // DON'T DO THIS: this.state.persons[0].name = 'Big Aldo';
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 90 },
  //       { name: "Big Jacksie", age: 45 },
  //       { name: "Big John", age: 22.5 },
  //     ],
  //   });
  // };

  handleNameChange = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  handlePersonToggle = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons : !doesShow })
  };

  handlePersonDelete = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  };

  render() {
    const style = {
      backgroundColor: "teal",
      font: "inherit",
      border: "1px solid yellow",
      padding: "12px",
      cursor: "pointer",
    };

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
            {this.state.persons.map((person, index) => {
              return <Person 
              click={() => this.handlePersonDelete(index)}
              name={person.name} 
              age={person.age}
              key={person.id}
              changed={(event) => this.handleNameChange(event, person.id)} />
            })}
          </div>
      );
    }

    return (
      <div className="App">
        <h1>HoWdY pLaNeT</h1>
        <p>HeRe To ParTy Wi ReAcT</p>
        <button style={style} onClick={this.handlePersonToggle}>
          Toggle Persons 
        </button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
