import React, { useState, useEffect } from 'react';

import './App.css';

const half = (num) => num / 2;
const double = (num) => num * 2;
const increment = (num) => num + 1;
const decrement = (num) => num - 1;

const App = () => {

	const [operationArr, setOperationArr] = useState([]);
	const [val, setVal] = useState(0);
	const [res, setRes] = useState(null);

	const handleClick = (operationType) => {
		setOperationArr(prevState => [...prevState, operationType]);
	};

	const handleChange = e => {
		const { value } = e.target;
		setVal(value);
	}

	const handleClear = () => {
		setOperationArr([]);
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		let tempVal = val;
		console.log(val, operationArr);
		for (let operation in operationArr) {

			switch (operation) {
				case "half":
					tempVal = half(tempVal);
					break;
				case "double":
					tempVal = double(tempVal);
					break;
				case "increment":
					tempVal = increment(tempVal);
					break;
				case "decrement":
					tempVal = decrement(tempVal);
					break;
				default:
					throw new Error('Something went wrong!');
			}
		}

		setRes(tempVal)
	}

	//useEffect(() => {

	//	if (!val && !operationArr) return;

	//	if (!val) throw new Error('No value Received!');

	//	let resVal = val;

	//	if(!operationArr) return resVal;

	//}, [val])

	console.log('render');

  return (
	<div className='app--container'>
		<div className="btn--container">
			<button
			onClick={() => handleClick("half")}
			className="button">half</button>
			<button
			onClick={() => handleClick("double")}
			className="button">double</button>
			<button
			onClick={() => handleClick("increment")}
			className="button">increment</button>
			<button
			onClick={() => handleClick("decrement")}
			className="button">decrement</button>
			<button
			onClick={handleClear}
			className="button">clear</button>
		</div>
		<p>My Function</p>
		{res ? operationArr.map((op, idx) => (
		<p key={idx}>operation</p> )) : "" }
		<form
		onSubmit={handleSubmit}
		className="submit--container">
			<input
			onChange={handleChange}
			value={val}
			type="number"
			required/>
			<button
			>Submit</button>
		</form>
		<p>Last Execution:</p>
		<p> {res ? val : "?"} &rarr; My Function &rarr; {res ? res : "?"}</p>
	</div>
  )
};

export default App;
