import React, { useState } from 'react';

const App = () => {

	const [searchTerm, setSearchTerm] = useState('')
	const [robotArr, setRobotArr] = useState([]);


	const handleClick = async () => {

		const response = await fetch(`https://robohash.org/${searchTerm}`)

		const newRobot = response.url;

		setRobotArr(prevArr => [...prevArr, newRobot]);
	}


  return (
	<div className='app--container'>
		<div className='search--container'>
			<input
			type="text"
			name="searchTerm"
			onChange={(e) => setSearchTerm(e.target.value)}
			value={searchTerm}
			placeholder={"Enter robot name: "}
			/>
			<button
			onClick={handleClick}
			>
				Enter
			</button>
		</div>
		<h2>Robot List</h2>
		<div className='robot--container'>
			{robotArr.map((robot, idx) => (
				<img
				key={idx}
				src={robot}
				alt="A robot"
				/>
			))}
		</div>
	</div>
  )
}

export default App;