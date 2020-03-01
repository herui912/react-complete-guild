import React, {useEffect, useRef} from 'react'
import classes from './Cockpit.css'

const cockpit = (props) => {
	const toggleBtnRef = useRef(null)
	useEffect(() => {
		console.log('[Cockpit.js] 1st useEffect')
		// Http Request...
		// const timer = setTimeout(() => {
		// 	alert('Saved dat ato cloud')
		// }, 1000)
		toggleBtnRef.current.click()
		return () => {
			// clearTimeout(timer)
			console.log('[Cockpit.js] 1st cleanup use in useEffect')
		}
		// Run only first Time
	}, []) 
	useEffect(() => {
		console.log('[Cockpit.js] 2nd useEffect')
		return () => {
			console.log('[Cockpit.js] cleanup use in 2nd useEffect')
		}
	}) 
	let btnClass = ''
	if (props.showPersons) {
		btnClass = classes.Red;
	}
	const assignedClasses = []
	if (props.personsLength <=2) {
		assignedClasses.push(classes.red)
	}
	if (props.personsLength <=1) {
		assignedClasses.push(classes.bold)
	}
	return (
		<div className={classes.Cockpit}>
			<h1>I'm a react app</h1>
      <p className={assignedClasses.join(' ')}>This is working</p>
			{/* Don't recommand, better use bind */}
			<button
				ref={toggleBtnRef}
				className={btnClass}
				onClick={props.clicked}>Toggle Person</button>
		</div>
	)
}
// React memo only affect when props change. So don't rerender if prop didn't change
export default React.memo(cockpit)