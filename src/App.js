import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Aldo', age: 45 },
      { name: 'Jacksie', age: 22.5 },
      { name: 'John', age: 11.25 }
    ],
    otherState: 'some other value'
  };

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Big Aldo';
    this.setState({
      persons: [
        { name: newName, age: 90 },
        { name: 'Big Jacksie', age: 45 },
        { name: 'Big John', age: 22.5 }
      ]
    });
  };

  handleNameChange = (event) => {
    this.setState({
      persons: [
        { name: 'Big Aldo', age: 90 },
        { name: event.target.value, age: 45 },
        { name: 'Big John', age: 22.5 }
      ]
    });
  }

  render() {
    const style = {
      backgroundColor: 'teal',
      font: 'inherit',
      border: '1px solid yellow',
      padding: '12px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>HoWdY pLaNeT</h1>
        <p>HeRe To ParTy Wi ReAcT</p>
        <button 
        style={style}
        onClick={() => this.switchNameHandler('Big Aldo')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Big Jacksie!!!')}
          changed={this.handleNameChange}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
