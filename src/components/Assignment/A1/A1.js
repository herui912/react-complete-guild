import React, { Component } from 'react';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class A1 extends Component {
  state = {
    ps : [
      { userName: 'Lala'},
      { userName: 'Meow'}
    ]
  }
  nameChangeHandler = (event) => {
    this.setState(
      {
        ps : [
					{ userName: event.target.value},
					{ userName: 'Meow'}
				]
      }
    )
  }
  render() {
    return (
      <div className="A1">
        <UserInput
					userName={this.state.ps[0].userName}
					change={this.nameChangeHandler}/>
				<UserOutput
					userName={this.state.ps[0].userName}
					p2={this.state.ps[0].p2}
					>
						Add Child content
					</UserOutput>
      </div>
    );
  }
}

export default A1;
