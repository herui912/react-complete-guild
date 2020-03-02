import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import withClass from '../hoc/withClass'
import Aux from '../hoc/Aux'
import AuthContext from '../context/auth-context'

// import A2 from './Assignment/A2/A2'
class App extends Component {
  constructor(props) {
    super(props)
    console.log('[App.js] constructor')
  }
  state = {
    persons : [
      { id: '111', name: 'Max', age: 28 },
      { id: '112', name: 'Manu', age: 29 },
      { id: '113', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other state',
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    isAnthenticated: false
  }
  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props)
    return state
  }
  // componentWillMount () {
  //   console.log('[App.js] componentWillMount')
  // }
  componentDidMount () {
    console.log('[App.js] componentDidMount')
  }
  shouldComponentUpdate(nextProps, nextState) {
		console.log('[App.js] shouldComponentUpdate')
		return true
	}
  componentDidUpdate () {
    console.log('[App.js] componentDidUpdate')
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
    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      }
    })
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
  loginHandler = () => {
    this.setState({isAnthenticated: true})
  }
  render() {
    console.log('[App.js] render')
    let persons = null
    if (this.state.showPersons) {
      persons = <Persons
              persons={this.state.persons}
              clicked={this.deletePersonHandler}
              changed={this.nameChangeHandler}
            />
    }
    // Error Boundry only use when you know definitly gonna fail
    // const rnd = Math.random()
    // if (rnd > 0.7)  {
    //   throw newError('Something went wrong')
    // }
    return (
      <Aux classes={classes.App}>
        <button onClick={() => this.setState({ showCockpit: false})}>Remove Cockpit</button>
        <AuthContext.Provider
          value={{
            authenticated: this.state.isAnthenticated,
            login: this.loginHandler
          }}
        >
          {this.state.showCockpit ? (
          <Cockpit
            personsLength={this.state.persons.length}
            showPersons={this.state.showPersons}
            clicked={this.togglePersonsHandler}
          />
          ) : null}
          {persons}
        </AuthContext.Provider>
      </Aux>
    );
    // return React.createElement('div', null, 
    //   React.createElement('h1', {className: 'App'}, 'It is React'))
  }
}

export default withClass(App, classes.App);
