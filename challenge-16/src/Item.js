import React from 'react'

const Item = ({ item : { itemName, itemPrice }, removeItem }) => {
  return (
	<div className='item'>
		<span className="name">{itemName}</span>
		<span className="price">${itemPrice}</span>
		<span
		className='remove'
		onClick={(e) => removeItem(e)}
		>
			<div
			onClick={(e) => removeItem(e)}
			className='remove--1'></div>
			<div
			onClick={(e) => removeItem(e)}
			className='remove--2'></div>
		</span>
	</div>
  )
}

export default Item;