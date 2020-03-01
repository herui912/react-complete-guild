import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons : [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other state'
  }
  switchNameHandler = () => {
    this.state.persons[0].name = 'Jush'
    this.setState(
      {
        persons : [
          { name: 'Josh', age: 28 },
          { name: 'Manu', age: 29 },
          { name: 'Stephanie', age: 27 }
        ]
      }
    )
  }
  render() {  
    return (
      <div className="App">
        <h1>I'm a react app</h1>
        <p>This is working</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}>My Hobbie is sing</Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age} />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />

      </div>
    );
    // return React.createElement('div', null, 
    //   React.createElement('h1', {className: 'App'}, 'It is React'))
  }
}

export default App;
