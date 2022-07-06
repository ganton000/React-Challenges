import React, { useState, useEffect } from 'react';
import axios from 'axios';

const api = axios.create({
	httpsAgent: new https.Agent({
	rejectUnauthorized: false
	})
});

const App = () => {

	const [activityArr, setActivityArr] = useState([]);

	useEffect(() => {

		const getActivity = async () => {

			const response = await api.get('https://www.boredapi.com/api/activity');
			//const jsonResponse = await response.json();

			console.log(response);
		};

		getActivity();

	},[]);

  	return (
		<div className='container'>
			<button>Generate Activity</button>
		</div>
 	)
}

export default App;