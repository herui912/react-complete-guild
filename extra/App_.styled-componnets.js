import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import styled from 'styled-components'

// import A2 from './Assignment/A2/A2'
const StyleButton = styled.button`{
  background-color: ${props => props.alt ? 'red': 'green'};
  color: white;
  padding: 8px;
  border: 1px solid blue;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.alt ? 'salmon': 'lightgreen'};
    color: black;
  }
}`
class App extends Component {
  state = {
    persons : [
      { id: '111', name: 'Max', age: 28 },
      { id: '112', name: 'Manu', age: 29 },
      { id: '113', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other state',
    showPersons: false
  }
  switchNameHandler = (newName) => {
    this.setState(
      {
        persons : [
          { id: '111', name: newName, age: 28 },
          { id: '112', name: 'Manu', age: 29 },
          { id: '113', name: 'Stephanie', age: 27 }
        ]
      }
    )
  }
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id)
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person
    this.setState({ persons : persons} )
  }
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons : !doesShow });
  }
  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }
  render() {
    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   padding: '8px',
    //   border: '1px solid blue',
    //   cursor: 'pointer',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black'
    //   }
    // }
    let persons = null
    if (this.state.showPersons) {
      persons = (
        
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
            name={person.name}
            age={person.age}
            key={person.id}
            click={() => this.deletePersonHandler(index)}
            changed={(event) => this.nameChangeHandler(event, person.id)}/>
          })}
          </div>
      );
      // style.backgroundColor = 'hotpink'
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }
    let classes = []
    if (this.state.persons.length <=2) {
      classes.push('red')
    }
    if (this.state.persons.length <=1) {
      classes.push('bold')
    }
    return (
      <div className="App">
        <h1>I'm a react app</h1>
        <p className={classes.join(' ')}>This is working</p>
        {/* Don't recommand, better use bind */}
        <StyleButton alt={this.state.showPersons} onClick={this.togglePersonsHandler}>Switch Name</StyleButton>
        {persons}
        {/* <A2 /> */}
      </div>
    );
    // return React.createElement('div', null, 
    //   React.createElement('h1', {className: 'App'}, 'It is React'))
  }
}

export default App;
