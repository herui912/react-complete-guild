import React from 'react';
const userInput = (props) => {
	const inputStyle = {
		border: '3px solid purple'
	}
	return <input type="text" style={inputStyle} onChange={props.change} value={props.userName}/>
	
}
export default userInput