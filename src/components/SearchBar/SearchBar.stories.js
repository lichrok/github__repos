import React, { useState } from 'react';
import SearchBar from './index';

export default {
	component: SearchBar,
	title: 'Search input'
}

export const DefaultInput = () => {
	const [searchTerm, setSearchTerm] = useState('');

	return (
		<div className="container">
			<SearchBar value={searchTerm} onChange={setSearchTerm}/>
		</div>
	)
}
