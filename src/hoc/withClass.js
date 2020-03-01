import React from 'react'

const withClass = (WrappedComponnet, className) => {
	return props => (
		<div className={className}>
			<WrappedComponnet {...props}/>
		</div>
	)
}
export default withClass