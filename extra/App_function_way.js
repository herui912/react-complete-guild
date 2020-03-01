import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const app = () => {
  const [personState, setPersonState] = useState({
    persons : [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ]
  })
  const [otherState, setOtherState] = useState('Other thing')
  const switchNameHandler = () => {
    setPersonState(
      {
        persons : [
          { name: 'Josh', age: 28 },
          { name: 'Manu', age: 29 },
          { name: 'Stephanie', age: 27 }
        ],
        otherState: personState.otherState
      }
    )
  }
  return (
    <div className="App">
      <h1>I'm a react app</h1>
      <p>This is working</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personState.persons[0].name}
        age={personState.persons[0].age}>My Hobbie is sing</Person>
      <Person
        name={personState.persons[1].name}
        age={personState.persons[1].age} />
      <Person name={personState.persons[2].name} age={personState.persons[2].age} />

    </div>
  );
  // return React.createElement('div', null, 
  //   React.createElement('h1', {className: 'App'}, 'It is React'))
}

export default app;
