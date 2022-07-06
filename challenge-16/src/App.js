import React, { useState } from 'react';

import Item from './Item';

const App = () => {

	const [item, setItem] = useState({
		itemName: "",
		itemPrice: 0
	});
	const [itemArr, setItemArr] = useState([]);

	const handleChange = (event) => {
		const {name, value} = event.target;

		setItem(prevItem => ({...prevItem,
			[name]: value
		}))
	};

	const removeItem = (e) => {
		console.log(e);
	}

	const addItem = () => {
		setItemArr(
			prevItemArr => [...prevItemArr, item])
	}

  	return (
		<div className='app--container'>
			<div
			className='btn--container'>
				<input
				name="itemName"
				type="text"
				value={item.itemName}
				placeholder={"Enter a shopping item:"}
				onChange={handleChange}
				required />
				<input
				value={item.itemPrice}
				name="itemPrice"
				type="number"
				min={0}
				step={0.01}
				placeholder={"Enter the price (number):"}
				onChange={handleChange}
				required />
				<button
				onClick={addItem}
				>
					Submit
				</button>
			</div>
			<div className='item--container'>
				{ itemArr ? (
					itemArr.map((item, idx) => (
					<Item
					removeItem={removeItem}
					key={idx}
					item={item} />
				))) : "" }
			</div>
		</div>
	)
};

export default App;