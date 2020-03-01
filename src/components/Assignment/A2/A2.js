import React, { Component } from 'react';
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'
class A2 extends Component {
	state = {
		textVal: ''
	}
	inputChange = (event) => {
		console.log(event.target.value)
		this.setState({
			textVal: event.target.value
		})
	}
	removeChar = (index) => {
		let newVal = this.state.textVal.split('')
		newVal.splice(index, 1)
		newVal = newVal.join('')
    this.setState({textVal: newVal})
  }
	render () {
		let inputs = this.state.textVal.split('').map((ele, index) => {
			return <CharComponent char={ele} key={index} click={() => this.removeChar(index)} />
		})
		return (
			<div className="A2">
				<input type="text"
					onChange={this.inputChange}
					value={this.state.textVal} />
		    <p>{this.state.textVal.length}</p>
				<ValidationComponent textLen={this.state.textVal.length} />
				{inputs}
			</div>
		)
	}
}
export default A2;