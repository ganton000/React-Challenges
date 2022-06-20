import React from 'react'

const DisplayNested = ({ nestedObject }) => {


  return (
	<>
		{
		Object.entries(nestedObject).map(
			([key, val]) => (
			typeof val === 'object' ? (
				<>
					<p>{key}: </p>
					<div style={{ paddingLeft: 50}}>
						<DisplayNested
						nestedObject={val}
						/>
					</div>
				</>
			) : (
				<p>{key} : {val}</p>
			)
		))
		}
	</>
  )
}

export default DisplayNested