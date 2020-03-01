import React from 'react'

const validationComponnet = (props) => { 
	let text = props.textLen <= 5 ? 'Text too short' : 'Text long enough'
	return (<div>{text}</div>)
}
export default validationComponnet